/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "roast-without-refuse",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168248",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 985.0,
      "key": "roast-without-refuse",
      "kind": "unit",
      "label": "roast without refuse"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-yield-from-1-cooked-roast-with-refuse-weighing-1515g",
      "kind": "unit",
      "label": "3 oz (Yield from 1 cooked roast, with refuse, weighing 1515g)"
    }
  ],
  "name": "Pork, fresh, loin, sirloin (roasts), bone-in, separable lean only, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 204.0,
    "fat_g": 9.44,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.96,
    "magnesium_mg": 26.0,
    "omega3_g": 0.037,
    "phosphorus_mg": 235.0,
    "potassium_mg": 352.0,
    "protein_g": 27.8,
    "salt_g": 0.1475,
    "sat_fat_g": 2.87,
    "sodium_mg": 59.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168248",
  "state": "Roasted",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
