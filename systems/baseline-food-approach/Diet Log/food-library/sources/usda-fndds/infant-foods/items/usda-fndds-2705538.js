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
  "id": "usda-fndds-2705538",
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
  "name": "Infant formula, Enfamil AR, ready-to-feed",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 7.43,
    "energy_kcal": 65.0,
    "fat_g": 3.24,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.18,
    "magnesium_mg": 5.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 34.0,
    "potassium_mg": 70.0,
    "protein_g": 1.6,
    "salt_g": 0.065,
    "sat_fat_g": 1.36,
    "sodium_mg": 26.0,
    "sugar_g": 7.25,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 7.8,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705538",
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
