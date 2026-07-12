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
  "id": "usda-fndds-2705559",
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
  "name": "Infant formula, organic, ready-to-feed",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 7.12,
    "energy_kcal": 66.0,
    "fat_g": 3.56,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.19,
    "magnesium_mg": 5.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 28.0,
    "potassium_mg": 70.0,
    "protein_g": 1.38,
    "salt_g": 0.0425,
    "sat_fat_g": 1.34,
    "sodium_mg": 17.0,
    "sugar_g": 7.12,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 5.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705559",
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
