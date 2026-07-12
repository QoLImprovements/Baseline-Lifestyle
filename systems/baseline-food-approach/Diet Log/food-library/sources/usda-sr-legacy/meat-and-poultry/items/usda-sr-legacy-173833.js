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
  "id": "usda-sr-legacy-173833",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 304.0,
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
  "name": "Veal, shoulder, arm, separable lean and fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.0,
    "energy_kcal": 552.0,
    "fat_g": 5.44,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 1.0,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 208.0,
    "potassium_mg": 327.0,
    "protein_g": 19.3,
    "salt_g": 0.2075,
    "sat_fat_g": 2.26,
    "sodium_mg": 83.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173833",
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
