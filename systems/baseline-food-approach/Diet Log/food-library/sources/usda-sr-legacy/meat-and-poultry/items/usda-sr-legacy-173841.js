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
  "id": "usda-sr-legacy-173841",
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
      "gramsPerUnit": 183.0,
      "key": "piece-cooked-excluding-refuse-yield-from-1-lb-raw-meat-with",
      "kind": "unit",
      "label": "piece, cooked, excluding refuse (yield from 1 lb raw meat with refuse)"
    }
  ],
  "name": "Veal, sirloin, separable lean only, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 0.0,
    "energy_kcal": 854.0,
    "fat_g": 6.51,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 1.23,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 259.0,
    "potassium_mg": 339.0,
    "protein_g": 34.0,
    "salt_g": 0.2025,
    "sat_fat_g": 1.82,
    "sodium_mg": 81.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173841",
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
