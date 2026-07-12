/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "steak-excluding-refuse-yield-from-1-raw-steak-with-refuse-we",
  "description": "Beef Products",
  "id": "usda-sr-legacy-168725",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "steak-excluding-refuse-yield-from-1-raw-steak-with-refuse-we",
      "kind": "unit",
      "label": "steak, excluding refuse (yield from 1 raw steak, with refuse, weighing 154 g)"
    },
    {
      "gramsPerUnit": 119.0,
      "key": "steak-yield-from-1-raw-steak-weighing-151g",
      "kind": "unit",
      "label": "steak (yield from 1 raw steak weighing 151g)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Beef, tenderloin, steak, separable lean and fat, trimmed to 1/8\" fat, select, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 0.0,
    "energy_kcal": 1100.0,
    "fat_g": 16.5,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 1.63,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 214.0,
    "potassium_mg": 340.0,
    "protein_g": 26.5,
    "salt_g": 0.1425,
    "sat_fat_g": 6.51,
    "sodium_mg": 57.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168725",
  "state": "Grilled",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
