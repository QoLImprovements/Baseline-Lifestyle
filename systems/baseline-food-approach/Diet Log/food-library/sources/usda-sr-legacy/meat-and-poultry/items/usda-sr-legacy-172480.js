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
  "id": "usda-sr-legacy-172480",
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
      "gramsPerUnit": 242.0,
      "key": "piece-cooked-excluding-refuse-yield-from-1-lb-raw-meat-with",
      "kind": "unit",
      "label": "piece, cooked, excluding refuse (yield from 1 lb raw meat with refuse)"
    }
  ],
  "name": "Lamb, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/4\" fat, choice, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 294.0,
    "fat_g": 20.9,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 1.88,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 188.0,
    "potassium_mg": 310.0,
    "protein_g": 24.5,
    "salt_g": 0.18,
    "sat_fat_g": 8.83,
    "sodium_mg": 72.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172480",
  "state": "Cooked",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "cooked",
    "lamb-veal-and-game-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
