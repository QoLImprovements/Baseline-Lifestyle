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
  "id": "usda-sr-legacy-172505",
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
      "gramsPerUnit": 209.0,
      "key": "piece-cooked-excluding-refuse-yield-from-1-lb-raw-meat-with",
      "kind": "unit",
      "label": "piece, cooked, excluding refuse (yield from 1 lb raw meat with refuse)"
    }
  ],
  "name": "Lamb, shoulder, blade, separable lean and fat, trimmed to 1/4\" fat, choice, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 0.0,
    "energy_kcal": 1440.0,
    "fat_g": 24.7,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 2.35,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 185.0,
    "potassium_mg": 243.0,
    "protein_g": 28.5,
    "salt_g": 0.1875,
    "sat_fat_g": 10.3,
    "sodium_mg": 75.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172505",
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
