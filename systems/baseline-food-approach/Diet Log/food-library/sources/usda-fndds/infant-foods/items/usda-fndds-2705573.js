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
  "id": "usda-fndds-2705573",
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
  "name": "Infant formula, Similac for Diarrhea",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 6.67,
    "energy_kcal": 66.0,
    "fat_g": 3.6,
    "fibre_g": 0.7,
    "folate_ug": 10.0,
    "iron_mg": 1.18,
    "magnesium_mg": 5.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 49.0,
    "potassium_mg": 71.0,
    "protein_g": 1.76,
    "salt_g": 0.0725,
    "sat_fat_g": 1.48,
    "sodium_mg": 29.0,
    "sugar_g": 6.66,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 5.9,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705573",
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
