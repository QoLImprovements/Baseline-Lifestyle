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
  "id": "usda-fndds-2705544",
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
  "name": "Toddler formula, Enfamil Enfagrow",
  "nutritionPerBasis": {
    "calcium_mg": 129.0,
    "carbs_g": 7.0,
    "energy_kcal": 67.0,
    "fat_g": 3.52,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.98,
    "magnesium_mg": 5.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 86.0,
    "potassium_mg": 86.0,
    "protein_g": 1.7,
    "salt_g": 0.06,
    "sat_fat_g": 1.44,
    "sodium_mg": 24.0,
    "sugar_g": 6.97,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 7.9,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705544",
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
