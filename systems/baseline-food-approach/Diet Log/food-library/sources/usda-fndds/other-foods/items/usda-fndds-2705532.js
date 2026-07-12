/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-fl-oz",
  "description": "Formula, prepared from powder",
  "id": "usda-fndds-2705532",
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
  "name": "Toddler formula, Similac Go and Grow",
  "nutritionPerBasis": {
    "calcium_mg": 112.0,
    "carbs_g": 5.87,
    "energy_kcal": 58.0,
    "fat_g": 3.11,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.15,
    "magnesium_mg": 5.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 75.0,
    "potassium_mg": 86.0,
    "protein_g": 1.73,
    "salt_g": 0.0425,
    "sat_fat_g": 1.28,
    "sodium_mg": 17.0,
    "sugar_g": 5.87,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 6.9,
    "vitamin_e_mg": 1.16,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705532",
  "state": "Unspecified",
  "subcategory": "Formula, prepared from powder",
  "tags": [
    "formula-prepared-from-powder",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
