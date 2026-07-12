/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-174328",
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
      "gramsPerUnit": 93.0,
      "key": "chop-excluding-refuse-yield-from-1-raw-chop-with-refuse-weig",
      "kind": "unit",
      "label": "chop, excluding refuse (yield from 1 raw chop, with refuse, weighing 160 g)"
    }
  ],
  "name": "Lamb, shoulder, arm, separable lean and fat, trimmed to 1/4\" fat, choice, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.0,
    "energy_kcal": 1180.0,
    "fat_g": 19.6,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 2.09,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 197.0,
    "potassium_mg": 309.0,
    "protein_g": 24.4,
    "salt_g": 0.1925,
    "sat_fat_g": 8.37,
    "sodium_mg": 77.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174328",
  "state": "Grilled",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "grilled",
    "lamb-veal-and-game-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
