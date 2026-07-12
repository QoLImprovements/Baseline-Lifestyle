/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece-cooked-yield-from-1-lb-raw-meat-boneless",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-173846",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 277.0,
      "key": "piece-cooked-yield-from-1-lb-raw-meat-boneless",
      "kind": "unit",
      "label": "piece, cooked (yield from 1 lb raw meat, boneless)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Game meat, bear, cooked, simmered",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 1080.0,
    "fat_g": 13.4,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 10.7,
    "magnesium_mg": 23.0,
    "omega3_g": 0.071,
    "phosphorus_mg": 170.0,
    "potassium_mg": 263.0,
    "protein_g": 32.4,
    "salt_g": 0.1775,
    "sat_fat_g": 3.54,
    "sodium_mg": 71.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173846",
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
