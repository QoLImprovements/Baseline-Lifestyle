/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "steak-without-refuse-yield-from-1-raw-steak-with-refuse-weig",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168260",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "steak-without-refuse-yield-from-1-raw-steak-with-refuse-weig",
      "kind": "unit",
      "label": "steak without refuse (Yield from 1 raw steak, with refuse, weighing 379g)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Pork, fresh, shoulder, (Boston butt), blade (steaks), separable lean only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 550.0,
    "fat_g": 5.71,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.2,
    "magnesium_mg": 22.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 202.0,
    "potassium_mg": 339.0,
    "protein_g": 18.7,
    "salt_g": 0.1625,
    "sat_fat_g": 2.0,
    "sodium_mg": 65.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168260",
  "state": "Raw",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
