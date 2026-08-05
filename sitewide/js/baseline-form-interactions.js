/* Baseline Lifestyle — shared form, login and combobox interaction repair. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FORM_INTERACTIONS__) return;
  global.__BASELINE_FORM_INTERACTIONS__ = true;

  const document = global.document;
  const activeByInput = new WeakMap();

  function visible(element) {
    if (!element || element.hidden) return false;
    const style = global.getComputedStyle ? global.getComputedStyle(element) : null;
    return !style || (style.display !== 'none' && style.visibility !== 'hidden');
  }

  function controlledListbox(input) {
    const id = String(input.getAttribute('aria-controls') || '').trim();
    if (id) {
      const target = document.getElementById(id);
      if (target) return target;
    }
    const host = input.closest('.routine-action-combobox,.fitness-activity-combobox,.bl-combobox,[data-combobox]') || input.parentElement;
    return host?.querySelector('[role="listbox"]') || null;
  }

  function associatedToggle(input, listbox) {
    const id = listbox?.id || String(input.getAttribute('aria-controls') || '').trim();
    const host = input.closest('.routine-action-combobox,.fitness-activity-combobox,.bl-combobox,[data-combobox]') || input.parentElement;
    return (id && document.querySelector(`[aria-controls="${CSS.escape(id)}"]:not(input)`))
      || host?.querySelector('button[aria-haspopup="listbox"],button[aria-expanded],[data-activity-toggle],#routineActionToggle')
      || null;
  }

  function optionsFor(listbox) {
    if (!listbox) return [];
    return Array.from(listbox.querySelectorAll('[role="option"],button[data-action-option],button[data-activity-option]'))
      .filter((option) => !option.disabled && visible(option));
  }

  function setActive(input, listbox, index) {
    const options = optionsFor(listbox);
    if (!options.length) return;
    const next = Math.max(0, Math.min(options.length - 1, index));
    activeByInput.set(input, next);
    options.forEach((option, optionIndex) => {
      const active = optionIndex === next;
      option.classList.toggle('is-keyboard-active', active);
      option.setAttribute('aria-selected', active ? 'true' : 'false');
      if (active) {
        if (!option.id) option.id = `baseline-option-${Math.random().toString(36).slice(2, 10)}`;
        input.setAttribute('aria-activedescendant', option.id);
        option.scrollIntoView({ block:'nearest' });
      }
    });
  }

  function openCombobox(input) {
    const listbox = controlledListbox(input);
    if (!listbox) return null;
    const toggle = associatedToggle(input, listbox);
    if (listbox.hidden || input.getAttribute('aria-expanded') !== 'true') {
      if (toggle && toggle !== input) toggle.click();
      if (listbox.hidden) listbox.hidden = false;
      input.setAttribute('aria-expanded', 'true');
      toggle?.setAttribute('aria-expanded', 'true');
    }
    return listbox;
  }

  function closeCombobox(input) {
    const listbox = controlledListbox(input);
    if (!listbox) return;
    const toggle = associatedToggle(input, listbox);
    if (!listbox.hidden && toggle && toggle !== input) toggle.click();
    if (!listbox.hidden) listbox.hidden = true;
    input.setAttribute('aria-expanded', 'false');
    input.removeAttribute('aria-activedescendant');
    toggle?.setAttribute('aria-expanded', 'false');
    activeByInput.delete(input);
  }

  function submitVisibleAuthForm(form) {
    if (!form || form.hidden) return;
    const view = form.getAttribute('data-auth-view');
    const button = form.querySelector('button[type="submit"]') || ({
      login:'#bl-auth-login',
      signup:'#bl-auth-signup',
      recover:'#bl-auth-recover',
      reset:'#bl-auth-reset-submit'
    }[view] ? document.querySelector({
      login:'#bl-auth-login',
      signup:'#bl-auth-signup',
      recover:'#bl-auth-recover',
      reset:'#bl-auth-reset-submit'
    }[view]) : null);
    if (button && !button.disabled) button.click();
  }

  /* Keep editable Skincare fields focused. The original interface saves them
     on change/blur; suppressing its input-time rerender prevents one-character focus loss. */
  document.addEventListener('input', (event) => {
    const control = event.target?.closest?.('#routineItems [data-field="title"],#routineItems [data-field="notes"],#routineItems [data-field="customProductName"]');
    if (!control) return;
    event.stopImmediatePropagation();
  }, true);

  document.addEventListener('focusin', (event) => {
    const input = event.target?.closest?.('input[role="combobox"]');
    if (!input || input.matches('[data-activity-search]')) return;
    openCombobox(input);
  });

  document.addEventListener('click', (event) => {
    const input = event.target?.closest?.('input[role="combobox"]');
    if (!input || input.matches('[data-activity-search]')) return;
    openCombobox(input);
  });

  document.addEventListener('keydown', (event) => {
    const authInput = event.target?.closest?.('#bl-auth-flyout .bl-auth-form:not([hidden]) input');
    if (authInput && event.key === 'Enter' && !event.isComposing) {
      event.preventDefault();
      submitVisibleAuthForm(authInput.closest('.bl-auth-form'));
      return;
    }

    const input = event.target?.closest?.('input[role="combobox"]');
    if (!input || input.matches('[data-activity-search]')) return;
    const listbox = controlledListbox(input);
    if (!listbox) return;
    const options = optionsFor(listbox);

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      openCombobox(input);
      const current = activeByInput.has(input) ? activeByInput.get(input) : -1;
      const next = event.key === 'ArrowDown'
        ? (current < 0 ? 0 : Math.min(options.length - 1, current + 1))
        : (current < 0 ? Math.max(0, options.length - 1) : Math.max(0, current - 1));
      setActive(input, listbox, next);
      return;
    }
    if (event.key === 'Home' && visible(listbox)) {
      event.preventDefault();
      setActive(input, listbox, 0);
      return;
    }
    if (event.key === 'End' && visible(listbox)) {
      event.preventDefault();
      setActive(input, listbox, options.length - 1);
      return;
    }
    if (event.key === 'Enter' && visible(listbox)) {
      const index = activeByInput.get(input);
      if (Number.isInteger(index) && options[index]) {
        event.preventDefault();
        options[index].click();
      }
      return;
    }
    if (event.key === 'Escape' && visible(listbox)) {
      event.preventDefault();
      closeCombobox(input);
    }
  }, true);
})(window);
