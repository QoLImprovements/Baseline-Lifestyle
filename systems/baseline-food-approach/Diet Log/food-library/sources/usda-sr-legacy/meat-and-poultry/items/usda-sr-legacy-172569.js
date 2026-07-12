/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece-cooked-excluding-refuse-yield-from-1-lb-raw-meat-with",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-172569",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 194.0,
      "key": "piece-cooked-excluding-refuse-yield-from-1-lb-raw-meat-with",
      "kind": "unit",
      "label": "piece, cooked, excluding refuse (yield from 1 lb raw meat with refuse)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Veal, shank (fore and hind), separable lean and fat, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 0.0,
    "energy_kcal": 799.0,
    "fat_g": 6.2,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 1.25,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 225.0,
    "potassium_mg": 305.0,
    "protein_g": 31.5,
    "salt_g": 0.2325,
    "sat_fat_g": 2.08,
    "sodium_mg": 93.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172569",
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
