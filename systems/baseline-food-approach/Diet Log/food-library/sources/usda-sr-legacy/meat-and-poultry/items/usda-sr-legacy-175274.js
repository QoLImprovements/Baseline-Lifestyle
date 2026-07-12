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
  "id": "usda-sr-legacy-175274",
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
      "gramsPerUnit": 208.0,
      "key": "piece-cooked-excluding-refuse-yield-from-1-lb-raw-meat-with",
      "kind": "unit",
      "label": "piece, cooked, excluding refuse (yield from 1 lb raw meat with refuse)"
    }
  ],
  "name": "Veal, loin, separable lean only, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.0,
    "energy_kcal": 732.0,
    "fat_g": 6.94,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 0.85,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 222.0,
    "potassium_mg": 340.0,
    "protein_g": 26.3,
    "salt_g": 0.24,
    "sat_fat_g": 2.58,
    "sodium_mg": 96.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175274",
  "state": "Roasted",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "lamb-veal-and-game-products",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
