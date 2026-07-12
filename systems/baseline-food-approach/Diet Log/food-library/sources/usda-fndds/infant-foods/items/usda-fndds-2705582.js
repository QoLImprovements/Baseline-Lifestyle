/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-fl-oz",
  "description": "Formula, prepared from powder",
  "id": "usda-fndds-2705582",
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
  "name": "Infant formula, Enfamil Pregestimil, powder, made with water",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 6.76,
    "energy_kcal": 67.0,
    "fat_g": 3.62,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.16,
    "magnesium_mg": 5.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 34.0,
    "potassium_mg": 71.0,
    "protein_g": 1.81,
    "salt_g": 0.0775,
    "sat_fat_g": 2.14,
    "sodium_mg": 31.0,
    "sugar_g": 6.6,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 7.8,
    "vitamin_e_mg": 1.73,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705582",
  "state": "Unspecified",
  "subcategory": "Formula, prepared from powder",
  "tags": [
    "formula-prepared-from-powder",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
