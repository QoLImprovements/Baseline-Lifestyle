/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "chop-without-refuse-yield-from-1-raw-chop-with-refuse-weighi",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168242",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "chop-without-refuse-yield-from-1-raw-chop-with-refuse-weighi",
      "kind": "unit",
      "label": "chop without refuse (Yield from 1 raw chop, with refuse, weighing 201g)"
    },
    {
      "gramsPerUnit": 453.6,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Pork, fresh, loin, center rib (chops or roasts), bone-in, separable lean and fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 0.0,
    "energy_kcal": 779.0,
    "fat_g": 11.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.59,
    "magnesium_mg": 23.0,
    "omega3_g": 0.039,
    "phosphorus_mg": 203.0,
    "potassium_mg": 337.0,
    "protein_g": 20.3,
    "salt_g": 0.14,
    "sat_fat_g": 2.36,
    "sodium_mg": 56.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168242",
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
