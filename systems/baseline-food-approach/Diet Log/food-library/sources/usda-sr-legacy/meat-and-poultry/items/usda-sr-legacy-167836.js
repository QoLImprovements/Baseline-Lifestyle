/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167836",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 1046.0,
      "key": "roast-without-refuse-yield-from-1-cooked-roast-with-refuse-w",
      "kind": "unit",
      "label": "roast without refuse (Yield from 1 cooked roast, with refuse, weighing 1515g)"
    }
  ],
  "name": "Pork, fresh, loin, sirloin (roasts), bone-in, separable lean and fat, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.0,
    "energy_kcal": 230.0,
    "fat_g": 12.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.94,
    "magnesium_mg": 25.0,
    "omega3_g": 0.058,
    "phosphorus_mg": 228.0,
    "potassium_mg": 340.0,
    "protein_g": 26.6,
    "salt_g": 0.1425,
    "sat_fat_g": 4.11,
    "sodium_mg": 57.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167836",
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
