/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-fl-oz",
  "description": "Formula, ready-to-feed",
  "id": "usda-fndds-2705530",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.5,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    }
  ],
  "name": "Infant formula, Similac for Spit-Up, ready-to-feed",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 6.9,
    "energy_kcal": 65.0,
    "fat_g": 3.48,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.17,
    "magnesium_mg": 4.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 36.0,
    "potassium_mg": 69.0,
    "protein_g": 1.38,
    "salt_g": 0.0475,
    "sat_fat_g": 2.26,
    "sodium_mg": 19.0,
    "sugar_g": 6.9,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705530",
  "state": "Unspecified",
  "subcategory": "Formula, ready-to-feed",
  "tags": [
    "formula-ready-to-feed",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
