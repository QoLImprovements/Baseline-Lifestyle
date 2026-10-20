/* Baseline Personal Care — maintainable UK product and recipe picker. */
(function (global) {
  'use strict';
  if (global.BASELINE_SKINCARE_PRODUCT_LIBRARY) return;

  const ACTION_ROLES = Object.freeze({
    'water-rinse':['water'], 'oil-cleanse':['oil-cleanser'], 'oil-based-cleansing-shower':['oil-cleanser','shower-oil'],
    'cream-cleanse':['face-cleanser'], 'micellar-cleanse':['micellar'], 'gel-cleanse':['face-cleanser'], 'double-cleanse':['oil-cleanser','face-cleanser'],
    'warm-cloth-removal':['cloth'], 'facial-steam':['steam'], 'warm-compress':['cloth'], 'cool-compress':['cooling'],
    'hydrating-toner':['toner'], 'facial-essence':['essence'], 'nurture-shine-mist':['mist'],
    'aloe-layer':['aloe'], 'hydration-layer':['humectant'], 'conductive-mist':['conductive'], 'glycerin-layer':['glycerin'],
    'hyaluronic-layer':['hyaluronic'], 'ceramide-moisturiser':['moisturiser'], 'occlusive-seal':['moisturiser','occlusive'],
    'facial-oil':['face-oil'], 'lip-balm':['lip'], 'hand-foot-balm':['hand-foot'],
    'vitamin-c':['vitamin-c'], 'niacinamide':['niacinamide'], 'peptide-serum':['peptide'], 'retinoid':['retinoid'],
    'azelaic-acid':['azelaic'], 'salicylic-acid':['salicylic'], 'benzoyl-peroxide':['benzoyl'], 'tranexamic-acid':['tranexamic'], 'caffeine-eye':['eye'],
    'physical-exfoliation':['physical-exfoliant'], 'aha-exfoliation':['aha'], 'bha-exfoliation':['salicylic'], 'pha-exfoliation':['pha'],
    'enzyme-exfoliation':['enzyme'], 'urea-treatment':['urea'],
    'led-light':['led-device'], 'radiofrequency':['rf-device','conductive'], 'infrared-light':['led-device'], 'ipl-device':['ipl-device'],
    'ultrasound-device':['ultrasound-device','conductive'], 'heat-mask':['heat-device'], 'microcurrent':['microcurrent-device','conductive'],
    'galvanic-device':['galvanic-device','conductive'], 'iontophoresis':['galvanic-device','conductive'], 'ems-facial':['ems-device','conductive'],
    'high-frequency-wand':['high-frequency-device'], 'facial-cleansing-brush':['cleansing-device'], 'skin-scrubber':['scrubber-device'],
    'microdermabrasion-device':['microdermabrasion-device'], 'derma-roller':['microneedling-tool'], 'pore-vacuum':['pore-vacuum'],
    'ice-roller':['cooling-tool'], 'facial-roller':['massage-tool'], 'professional-facial':['professional'],
    'professional-chemical-peel':['professional'], 'professional-microneedling':['professional'], 'professional-rf':['professional'],
    'professional-laser':['professional'], 'professional-ipl':['professional'],
    'facial-massage':['massage-oil','massage-tool'], 'lymphatic-facial-massage':['massage-oil','massage-tool'], 'gua-sha':['massage-oil','massage-tool'],
    'body-oil-massage':['body-oil'], 'scalp-massage':['scalp-oil','scalp-tool'],
    'shave-gel':['shave-prep'], 'shave':['shave-prep','razor','shaver'], 'electric-shave':['shaver'],
    'post-shave-support':['aftershave','moisturiser'], 'wax-epilate':['wax','epilator'],
    'body-hydration':['body-hydration'], 'body-occlusive':['body-moisturiser'], 'body-oil':['body-oil'],
    'body-exfoliation':['body-exfoliant'], 'foot-soak':['foot'], 'hand-care':['hand-foot'],
    'sun-protection':['sunscreen'], 'sunscreen-reapply':['sunscreen'], 'patch-test':['product'], 'skin-check':['tracking'], 'progress-photo':['tracking'],
    'shower':['bath-shower'], 'bath':['bath-shower'], 'body-wash':['body-cleanser'], 'soap-bar':['soap'], 'shower-oil':['shower-oil'],
    'deodorant':['deodorant'], 'antiperspirant':['antiperspirant'], 'hand-wash':['hand-cleanser'], 'external-intimate-cleanse':['intimate-cleanser'],
    'water-only-hair-wash':['water'], 'shampoo-hair-wash':['shampoo'], 'clarifying-shampoo':['clarifying-shampoo'], 'co-wash':['co-wash'],
    'scalp-oil-cleanse':['scalp-oil','shampoo'], 'condition-hair':['conditioner'], 'deep-condition-hair':['hair-mask'],
    'leave-in-conditioner':['leave-in'], 'detangle-hair':['detangler','conditioner'], 'scalp-treatment':['scalp-treatment'],
    'hair-oil':['hair-oil'], 'dry-hair':['hair-dryer','towel'], 'style-hair':['styling'],
    'beard-wash':['beard-wash'], 'beard-condition':['beard-conditioner'], 'beard-oil':['beard-oil'], 'beard-trim':['trimmer'],
    'brush-teeth':['toothpaste','toothbrush'], 'interdental-clean':['floss','interdental'], 'tongue-clean':['tongue-tool'],
    'mouthwash':['mouthwash'], 'dental-appliance-clean':['appliance-cleaner'],
    'trim-nails':['nail-tool'], 'file-nails':['nail-tool'], 'cuticle-care':['cuticle'], 'callus-care':['foot'],
    'eyebrow-groom':['tweezers','trimmer'], 'nose-ear-hair-trim':['trimmer'], 'custom':['product']
  });

  function product(id, brand, name, roles) {
    return Object.freeze({ id, brand, name, roles: Object.freeze(roles) });
  }

  const PRODUCTS = Object.freeze([
    product('altruist-spf50','Altruist','Dermatologist Sunscreen SPF50',['sunscreen']),
    product('as-i-am-cowash','As I Am','Coconut CoWash',['co-wash']),
    product('aveeno-calm-cleanser','Aveeno','Calm + Restore Nourishing Oat Cleanser',['face-cleanser']),
    product('aveeno-calm-gel','Aveeno','Calm + Restore Oat Gel Moisturiser',['moisturiser']),
    product('aveeno-daily-lotion','Aveeno','Daily Moisturising Lotion',['body-moisturiser','hand-foot']),
    product('aveeno-dermexa-cream','Aveeno','Dermexa Daily Emollient Cream',['body-moisturiser','hand-foot']),
    product('aveeno-oat-conditioner','Aveeno','Daily Moisture+ Oat Milk Blend Conditioner',['conditioner']),
    product('aveeno-oat-shampoo','Aveeno','Daily Moisture+ Oat Milk Blend Shampoo',['shampoo']),
    product('aveeno-skin-relief-wash','Aveeno','Skin Relief Body Wash',['body-cleanser']),
    product('beauty-of-joseon-relief-sun','Beauty of Joseon','Relief Sun Rice + Probiotics SPF50+',['sunscreen']),
    product('bioderma-atoderm-oil','Bioderma','Atoderm Shower Oil',['shower-oil','body-cleanser']),
    product('bioderma-sensibio','Bioderma','Sensibio H2O Micellar Water',['micellar']),
    product('boots-glycerin-rosewater','Boots','Traditional Glycerin and Rosewater',['toner','glycerin']),
    product('boots-hyaluronic-spf','Boots','SPF+ Hyaluronic Acid Moisturising Lotion SPF50',['sunscreen','hyaluronic']),
    product('boots-niacinamide-spf','Boots','SPF+ Niacinamide Moisturising Lotion SPF50',['sunscreen','niacinamide']),
    product('braun-series-9','Braun','Series 9 Pro+ Electric Shaver',['shaver']),
    product('braun-silk-epil-9','Braun','Silk-épil 9 Epilator',['epilator']),
    product('braun-silk-expert','Braun','Silk-expert Pro 5 IPL',['ipl-device']),
    product('bulldog-original-gel','Bulldog','Original Shave Gel',['shave-prep']),
    product('bulldog-sensitive-balm','Bulldog','Sensitive Aftershave Balm',['aftershave']),
    product('bulldog-sensitive-gel','Bulldog','Sensitive Shave Gel',['shave-prep']),
    product('cantu-cleansing-shampoo','Cantu','Shea Butter Cleansing Cream Shampoo',['shampoo']),
    product('cantu-hydrating-conditioner','Cantu','Shea Butter Hydrating Cream Conditioner',['conditioner']),
    product('cerave-am-spf50','CeraVe','AM Facial Moisturising Lotion SPF50',['sunscreen','moisturiser']),
    product('cerave-foaming-cleanser','CeraVe','Foaming Cleanser',['face-cleanser']),
    product('cerave-hydrating-cleanser','CeraVe','Hydrating Cleanser',['face-cleanser','body-cleanser']),
    product('cerave-moisturising-cream','CeraVe','Moisturising Cream',['moisturiser','body-moisturiser']),
    product('cerave-moisturising-lotion','CeraVe','Moisturising Lotion',['moisturiser','body-moisturiser']),
    product('cerave-resurfacing-retinol','CeraVe','Resurfacing Retinol Serum',['retinoid']),
    product('cetaphil-daily-hydrating','Cetaphil','Daily Hydrating Moisturiser',['moisturiser','hyaluronic']),
    product('cetaphil-daily-defence','Cetaphil','Daily Defence Cream SPF50',['sunscreen']),
    product('cetaphil-gentle-cleanser','Cetaphil','Gentle Skin Cleanser',['face-cleanser','body-cleanser']),
    product('cetaphil-moisturising-cream','Cetaphil','Moisturising Cream',['moisturiser','body-moisturiser']),
    product('ccs-foot-care','CCS','Foot Care Cream',['foot','urea']),
    product('corsodyl-mouthwash','Corsodyl','Daily Gum Care Mouthwash',['mouthwash']),
    product('currentbody-blue-mask','CurrentBody Skin','LED Blue Light Therapy Face Mask: Series 2',['led-device']),
    product('currentbody-green-tea','CurrentBody Skin','Green Tea Serum',['led-device','serum']),
    product('currentbody-led-face','CurrentBody Skin','LED Red Light Therapy Face Mask: Series 2',['led-device']),
    product('currentbody-led-neck','CurrentBody Skin','LED Neck & Décolletage Mask',['led-device']),
    product('currentbody-multilight','CurrentBody Skin','LED Multi-Light Therapy Mask',['led-device']),
    product('currentbody-rf','CurrentBody Skin','RF Radio Frequency Skin Tightening Device',['rf-device']),
    product('currentbody-rf-gel','CurrentBody Skin','Radio Frequency Gel',['conductive']),
    product('e45-cream','E45','Cream',['body-moisturiser','hand-foot','occlusive']),
    product('e45-dry-scalp-shampoo','E45','Dry Scalp Shampoo',['shampoo','scalp-treatment']),
    product('e45-lotion','E45','Moisturising Lotion',['body-moisturiser']),
    product('e45-shower-cream','E45','Emollient Shower Cream',['body-cleanser']),
    product('elemis-cleansing-balm','ELEMIS','Pro-Collagen Cleansing Balm',['oil-cleanser']),
    product('eucerin-oil-control-spf','Eucerin','Sun Face Oil Control Gel-Cream SPF50+',['sunscreen']),
    product('eucerin-ph5-shower-oil','Eucerin','pH5 Shower Oil',['shower-oil','body-cleanser']),
    product('faith-fragrance-free-conditioner','Faith in Nature','Fragrance Free Conditioner',['conditioner']),
    product('faith-fragrance-free-shampoo','Faith in Nature','Fragrance Free Shampoo',['shampoo']),
    product('foreo-bear-2','FOREO','BEAR 2 Microcurrent Device',['microcurrent-device']),
    product('foreo-luna-4','FOREO','LUNA 4 Facial Cleansing Device',['cleansing-device']),
    product('flexitol-heel-balm','Flexitol','Heel Balm',['foot','urea']),
    product('garnier-micellar-sensitive','Garnier','Micellar Cleansing Water for Sensitive Skin',['micellar']),
    product('garnier-super-uv','Garnier','Ambre Solaire Super UV Invisible Face Serum SPF50+',['sunscreen']),
    product('gillette-sensitive-gel','Gillette','Series Sensitive Shave Gel',['shave-prep']),
    product('gillette-fusion-sensitive','Gillette','Fusion5 Ultra Sensitive Shave Gel',['shave-prep']),
    product('gillette-king-transparent','King C. Gillette','Transparent Shave Gel',['shave-prep']),
    product('gillette-king-beard-oil','King C. Gillette','Beard Oil',['beard-oil']),
    product('gillette-king-beard-wash','King C. Gillette','Beard and Face Wash',['beard-wash']),
    product('head-shoulders-classic','Head & Shoulders','Classic Clean Shampoo',['shampoo','scalp-treatment']),
    product('inkey-caffeine-eye','The INKEY List','Caffeine Eye Cream',['eye']),
    product('inkey-hyaluronic','The INKEY List','Hyaluronic Acid Serum',['hyaluronic']),
    product('inkey-niacinamide','The INKEY List','Niacinamide Serum',['niacinamide']),
    product('inkey-oat-balm','The INKEY List','Oat Cleansing Balm',['oil-cleanser']),
    product('inkey-retinol','The INKEY List','Retinol Serum',['retinoid']),
    product('inkey-salicylic-cleanser','The INKEY List','Salicylic Acid Cleanser',['face-cleanser','salicylic']),
    product('inkey-vitamin-c-egf','The INKEY List','15% Vitamin C + EGF Serum',['vitamin-c']),
    product('lrp-anthelios-fluid','La Roche-Posay','Anthelios UVMune 400 Invisible Fluid SPF50+',['sunscreen']),
    product('lrp-cicaplast','La Roche-Posay','Cicaplast Baume B5+',['moisturiser','aftershave','occlusive']),
    product('lrp-lipikar-syndet','La Roche-Posay','Lipikar Syndet AP+ Wash Cream',['body-cleanser']),
    product('lrp-toleriane-cleanser','La Roche-Posay','Toleriane Dermo-Cleanser',['face-cleanser']),
    product('lrp-toleriane-fluid','La Roche-Posay','Toleriane Sensitive Fluid',['moisturiser']),
    product('naissance-castor','Naissance','Castor Oil',['face-oil','body-oil','scalp-oil','hair-oil']),
    product('naissance-jojoba','Naissance','Golden Jojoba Oil',['face-oil','body-oil','scalp-oil','hair-oil','beard-oil']),
    product('naissance-safflower','Naissance','Safflower Oil',['oil-cleanser','face-oil','body-oil','massage-oil']),
    product('neutrogena-hydro-boost','Neutrogena','Hydro Boost Water Gel Moisturiser',['moisturiser','hyaluronic']),
    product('neutrogena-hydro-spf','Neutrogena','Hydro Boost Hydrating Fluid SPF50',['sunscreen','hyaluronic','niacinamide']),
    product('neutrogena-tgel','Neutrogena','T/Gel Therapeutic Shampoo',['shampoo','scalp-treatment']),
    product('nivea-sensitive-balm','NIVEA MEN','Sensitive Post Shave Balm',['aftershave']),
    product('nivea-sensitive-gel','NIVEA MEN','Sensitive Shaving Gel',['shave-prep']),
    product('nivea-shine-control','NIVEA SUN','UV Face Shine Control SPF50',['sunscreen']),
    product('noughty-rescue-conditioner','Noughty','To The Rescue Conditioner',['conditioner']),
    product('noughty-rescue-shampoo','Noughty','To The Rescue Shampoo',['shampoo']),
    product('nuface-aqua-gel','NuFACE','Aqua Gel Activator',['conductive']),
    product('nuface-silk-creme','NuFACE','Silk Crème Activator',['conductive']),
    product('nuface-trinity-plus','NuFACE','TRINITY+ Smart Advanced Facial Toning Device',['microcurrent-device']),
    product('okeeffes-healthy-feet','O’Keeffe’s','Healthy Feet Foot Cream',['foot','hand-foot']),
    product('okeeffes-working-hands','O’Keeffe’s','Working Hands Hand Cream',['hand-foot']),
    product('oralb-floss','Oral-B','Essential Floss',['floss']),
    product('oralb-io','Oral-B','iO Electric Toothbrush',['toothbrush']),
    product('oralb-pro-expert','Oral-B','Pro-Expert Toothpaste',['toothpaste']),
    product('panasonic-arc5','Panasonic','Arc5 Electric Shaver',['shaver']),
    product('philips-lumea','Philips','Lumea IPL Hair Removal Device',['ipl-device']),
    product('philips-oneblade','Philips','OneBlade Face + Body',['shaver','trimmer']),
    product('philips-prestige','Philips','Series 9000 Prestige Electric Shaver',['shaver']),
    product('revolution-water-cream','Revolution Pro','Miracle Water Cream Moisturiser',['moisturiser','niacinamide','hyaluronic']),
    product('sensodyne-pronamel','Sensodyne','Pronamel Daily Protection Toothpaste',['toothpaste']),
    product('shea-jbco-conditioner','SheaMoisture','Jamaican Black Castor Oil Conditioner',['conditioner']),
    product('shea-jbco-shampoo','SheaMoisture','Jamaican Black Castor Oil Shampoo',['shampoo']),
    product('simple-light-moisturiser','Simple','Kind to Skin Hydrating Light Moisturiser',['moisturiser']),
    product('simple-rich-moisturiser','Simple','Kind to Skin Replenishing Rich Moisturiser',['moisturiser']),
    product('simple-facial-wash','Simple','Kind to Skin Moisturising Facial Wash',['face-cleanser']),
    product('skinme-cleanser','Skin + Me','Cream Cleanser for Sensitive Skin',['face-cleanser']),
    product('skinme-light-moisturiser','Skin + Me','Light Moisturiser for Oily to Combination Skin',['moisturiser']),
    product('skinme-rich-moisturiser','Skin + Me','Rich Moisturiser for Dry to Normal Skin',['moisturiser']),
    product('superdrug-cooling-spray','Superdrug','Face & Body Cooling Spray',['mist','cooling']),
    product('tepe-interdental','TePe','Interdental Brushes',['interdental']),
    product('ordinary-azelaic','The Ordinary','Azelaic Acid Suspension 10%',['azelaic']),
    product('ordinary-glycolic','The Ordinary','Glycolic Acid 7% Exfoliating Toner',['aha']),
    product('ordinary-hyaluronic','The Ordinary','Hyaluronic Acid 2% + B5',['hyaluronic']),
    product('ordinary-lactic-5','The Ordinary','Lactic Acid 5% + HA',['aha']),
    product('ordinary-multipeptide','The Ordinary','Multi-Peptide + HA Serum',['peptide']),
    product('ordinary-niacinamide','The Ordinary','Niacinamide 10% + Zinc 1%',['niacinamide']),
    product('ordinary-nmf','The Ordinary','Natural Moisturizing Factors + HA',['moisturiser']),
    product('ordinary-retinol','The Ordinary','Retinol in Squalane',['retinoid']),
    product('ordinary-salicylic','The Ordinary','Salicylic Acid 2% Solution',['salicylic']),
    product('ordinary-squalane-cleanser','The Ordinary','Squalane Cleanser',['oil-cleanser']),
    product('ultrasun-face','Ultrasun','Face SPF50+',['sunscreen']),
    product('venus-cleanser-shave','Venus','2-in-1 Cleanser + Shave Gel',['shave-prep','intimate-cleanser']),
    product('veet-men-cream','Veet Men','Hair Removal Cream',['wax']),
    product('veet-wax-strips','Veet','Expert Face Cold Wax Strips',['wax']),
    product('wilkinson-hydro-gel','Wilkinson Sword','Hydro Sensitive Shave Gel',['shave-prep']),
    product('wilkinson-safety-razor','Wilkinson Sword','Classic Double Edge Safety Razor',['razor'])
  ]);

  const PRODUCT_BY_ID = new Map(PRODUCTS.map((item) => [item.id, item]));

  function rolesForAction(actionId) {
    return ACTION_ROLES[String(actionId || '')] || ['product'];
  }

  function relevantProducts(actionId) {
    const roles = new Set(rolesForAction(actionId));
    return PRODUCTS.filter((item) => item.roles.some((role) => roles.has(role) || roles.has('product')))
      .slice()
      .sort((left, right) => `${left.brand} ${left.name}`.localeCompare(`${right.brand} ${right.name}`, 'en-GB', { sensitivity: 'base' }));
  }

  function recipeProducts(actionId) {
    if (!global.document) return [];
    const roles = rolesForAction(actionId).join(' ');
    const keywords = new Set(roles.replace(/-/g, ' ').split(/\s+/).filter((word) => word.length > 3));
    const recipes = Array.from(global.document.querySelectorAll('#recipes .recipe-page, #recipes [data-recipe-slug]')).map((card, index) => {
      const title = String(card.querySelector('h3, h2')?.textContent || '').trim();
      const id = String(card.id || card.dataset.recipeSlug || `recipe-${index + 1}`);
      return title ? { id, title } : null;
    }).filter(Boolean);
    const relevant = recipes.filter((recipe) => {
      const text = recipe.title.toLocaleLowerCase('en-GB');
      return Array.from(keywords).some((word) => text.includes(word));
    });
    return (relevant.length ? relevant : recipes).sort((left, right) => left.title.localeCompare(right.title, 'en-GB', { sensitivity: 'base' }));
  }

  function selectionDetails(value, actionId) {
    const selection = String(value || '');
    if (selection.startsWith('product:')) {
      const product = PRODUCT_BY_ID.get(selection.slice(8));
      return product ? { source: 'product', name: `${product.brand} — ${product.name}` } : { source: '', name: '' };
    }
    if (selection.startsWith('recipe:')) {
      const recipe = recipeProducts(actionId).find((item) => item.id === selection.slice(7));
      return recipe ? { source: 'recipe', name: recipe.title } : { source: 'recipe', name: '' };
    }
    if (selection === 'custom') return { source: 'custom', name: '' };
    return { source: '', name: '' };
  }

  function optionsHtml(actionId, selected = '') {
    const escape = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[character]));
    const recipes = recipeProducts(actionId);
    const products = relevantProducts(actionId);
    const recipeOptions = recipes.map((item) => `<option value="recipe:${escape(item.id)}"${selected === `recipe:${item.id}` ? ' selected' : ''}>${escape(item.title)}</option>`).join('');
    const productOptions = products.map((item) => `<option value="product:${escape(item.id)}"${selected === `product:${item.id}` ? ' selected' : ''}>${escape(item.brand)} — ${escape(item.name)}</option>`).join('');
    return `<option value="">No product selected</option>${recipeOptions ? `<optgroup label="My Recipes">${recipeOptions}</optgroup>` : ''}<optgroup label="UK Product Library">${productOptions}</optgroup><optgroup label="Other"><option value="custom"${selected === 'custom' ? ' selected' : ''}>Custom product…</option></optgroup>`;
  }

  global.BASELINE_SKINCARE_PRODUCT_LIBRARY = Object.freeze({
    ACTION_ROLES,
    PRODUCTS,
    PRODUCT_BY_ID,
    rolesForAction,
    relevantProducts,
    recipeProducts,
    selectionDetails,
    optionsHtml
  });
  if (typeof module !== 'undefined' && module.exports) module.exports = global.BASELINE_SKINCARE_PRODUCT_LIBRARY;
})(typeof window !== 'undefined' ? window : globalThis);
