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
  "id": "usda-fndds-2705547",
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
  "name": "Toddler formula, store brand, beginning or next stage",
  "nutritionPerBasis": {
    "calcium_mg": 121.0,
    "carbs_g": 6.43,
    "energy_kcal": 62.0,
    "fat_g": 3.32,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.06,
    "magnesium_mg": 5.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 80.0,
    "potassium_mg": 86.0,
    "protein_g": 1.72,
    "salt_g": 0.0525,
    "sat_fat_g": 1.36,
    "sodium_mg": 21.0,
    "sugar_g": 6.42,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 7.4,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705547",
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
