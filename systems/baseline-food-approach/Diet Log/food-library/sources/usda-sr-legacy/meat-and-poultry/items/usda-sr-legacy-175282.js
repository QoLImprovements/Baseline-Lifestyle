/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "steak-excluding-refuse-yield-from-1-raw-steak-with-refuse-we",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-175282",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 289.0,
      "key": "steak-excluding-refuse-yield-from-1-raw-steak-with-refuse-we",
      "kind": "unit",
      "label": "steak, excluding refuse (yield from 1 raw steak, with refuse, weighing 385 g)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Veal, shoulder, arm, separable lean only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 0.0,
    "energy_kcal": 439.0,
    "fat_g": 2.16,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 1.02,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 215.0,
    "potassium_mg": 339.0,
    "protein_g": 20.0,
    "salt_g": 0.215,
    "sat_fat_g": 0.65,
    "sodium_mg": 86.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175282",
  "state": "Raw",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "lamb-veal-and-game-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
