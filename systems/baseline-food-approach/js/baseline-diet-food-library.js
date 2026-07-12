/* Complete official Diet Log food-library loader. */
(function(){
  "use strict";
  window.BASELINE_DIET_FOOD_LIBRARY=[];
  var here=document.currentScript&&document.currentScript.src?document.currentScript.src:"";
  var base=here?here.replace(/[^/]*$/,""):"";
  var files=[
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--beverages--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--condiments-and-sauces--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--fish-and-seafood--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--fruit--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--fungi--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--grains-bread-and-pasta--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--herbs-spices-and-seasonings--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--infant-foods--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--legumes-and-pulses--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--meat-and-poultry--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--milk-dairy-and-eggs--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--nuts-and-seeds--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--oils-and-fats--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--other-foods--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--potatoes-and-starchy-vegetables--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--prepared-meals-and-mixed-dishes--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--snacks--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--soups--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--soy-and-plant-proteins--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--sweets-and-desserts--20260617.js",
  "../Diet Log/food-library/runtime/cofid-current/cofid-current--vegetables--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--beverages--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--condiments-and-sauces--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--fish-and-seafood--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--fruit--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--fungi--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--grains-bread-and-pasta--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--herbs-spices-and-seasonings--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--legumes-and-pulses--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--meat-and-poultry--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--milk-dairy-and-eggs--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--nuts-and-seeds--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--oils-and-fats--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--other-foods--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--potatoes-and-starchy-vegetables--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--prepared-meals-and-mixed-dishes--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--snacks--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--soups--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--sweets-and-desserts--20260617.js",
  "../Diet Log/food-library/runtime/cofid-old/cofid-old--vegetables--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--beverages--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--condiments-and-sauces--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--fish-and-seafood--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--fruit--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--fungi--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--grains-bread-and-pasta--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--herbs-spices-and-seasonings--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--infant-foods--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--legumes-and-pulses--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--meat-and-poultry--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--milk-dairy-and-eggs--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--nuts-and-seeds--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--oils-and-fats--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--other-foods--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--potatoes-and-starchy-vegetables--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--prepared-meals-and-mixed-dishes--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--snacks--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--soups--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--soy-and-plant-proteins--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--sweets-and-desserts--20260617.js",
  "../Diet Log/food-library/runtime/usda-fndds/usda-fndds--vegetables--20260617.js",
  "../Diet Log/food-library/runtime/usda-foundation/usda-foundation--beverages--20260617.js",
  "../Diet Log/food-library/runtime/usda-foundation/usda-foundation--condiments-and-sauces--20260617.js",
  "../Diet Log/food-library/runtime/usda-foundation/usda-foundation--fish-and-seafood--20260617.js",
  "../Diet Log/food-library/runtime/usda-foundation/usda-foundation--fruit--20260617.js",
  "../Diet Log/food-library/runtime/usda-foundation/usda-foundation--fungi--20260617.js",
  "../Diet Log/food-library/runtime/usda-foundation/usda-foundation--grains-bread-and-pasta--20260617.js",
  "../Diet Log/food-library/runtime/usda-foundation/usda-foundation--herbs-spices-and-seasonings--20260617.js",
  "../Diet Log/food-library/runtime/usda-foundation/usda-foundation--legumes-and-pulses--20260617.js",
  "../Diet Log/food-library/runtime/usda-foundation/usda-foundation--meat-and-poultry--20260617.js",
  "../Diet Log/food-library/runtime/usda-foundation/usda-foundation--milk-dairy-and-eggs--20260617.js",
  "../Diet Log/food-library/runtime/usda-foundation/usda-foundation--nuts-and-seeds--20260617.js",
  "../Diet Log/food-library/runtime/usda-foundation/usda-foundation--oils-and-fats--20260617.js",
  "../Diet Log/food-library/runtime/usda-foundation/usda-foundation--other-foods--20260617.js",
  "../Diet Log/food-library/runtime/usda-foundation/usda-foundation--potatoes-and-starchy-vegetables--20260617.js",
  "../Diet Log/food-library/runtime/usda-foundation/usda-foundation--sweets-and-desserts--20260617.js",
  "../Diet Log/food-library/runtime/usda-foundation/usda-foundation--vegetables--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--beverages--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--condiments-and-sauces--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--fish-and-seafood--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--fruit--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--fungi--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--grains-bread-and-pasta--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--herbs-spices-and-seasonings--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--infant-foods--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--legumes-and-pulses--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--meat-and-poultry--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--milk-dairy-and-eggs--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--nuts-and-seeds--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--oils-and-fats--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--other-foods--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--potatoes-and-starchy-vegetables--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--prepared-meals-and-mixed-dishes--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--snacks--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--soups--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--soy-and-plant-proteins--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--sweets-and-desserts--20260617.js",
  "../Diet Log/food-library/runtime/usda-sr-legacy/usda-sr-legacy--vegetables--20260617.js"
];
  function load(file){
    return new Promise(function(resolve,reject){
      var script=document.createElement("script");
      try{script.src=new URL(file,base).href;}catch(error){script.src=file;}
      script.onload=function(){resolve(file);};
      script.onerror=function(){reject(new Error("Food-library runtime bundle failed: "+file));};
      document.head.appendChild(script);
    });
  }
  window.BASELINE_DIET_FOOD_LIBRARY_READY=Promise.allSettled(files.map(load)).then(function(results){
    var failed=results.filter(function(result){return result.status==="rejected";});
    failed.forEach(function(result){if(window.console)console.error(result.reason);});
    if(failed.length)throw new Error(failed.length+" food-library bundle(s) failed to load");
    return window.BASELINE_DIET_FOOD_LIBRARY;
  });
})();
