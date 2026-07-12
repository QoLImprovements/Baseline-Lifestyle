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
  "id": "usda-fndds-2705550",
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
  "name": "Infant formula, Gerber Good Start Gentle, Stage 1, ready-to-feed",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 7.3,
    "energy_kcal": 66.0,
    "fat_g": 3.34,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.99,
    "magnesium_mg": 5.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 25.0,
    "potassium_mg": 71.0,
    "protein_g": 1.45,
    "salt_g": 0.045,
    "sat_fat_g": 1.4,
    "sodium_mg": 18.0,
    "sugar_g": 7.3,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 6.5,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705550",
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
