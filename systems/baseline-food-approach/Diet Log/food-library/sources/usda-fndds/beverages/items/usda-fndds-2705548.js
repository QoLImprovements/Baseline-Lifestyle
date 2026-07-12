/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-bottle-8-fl-oz",
  "description": "Formula, prepared from powder",
  "id": "usda-fndds-2705548",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-bottle-8-fl-oz",
      "kind": "unit",
      "label": "1 bottle (8 fl oz)"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    }
  ],
  "name": "Toddler formula, store brand, pediatric shake",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 11.2,
    "energy_kcal": 99.0,
    "fat_g": 4.77,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 1.34,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 125.0,
    "protein_g": 2.86,
    "salt_g": 0.09,
    "sat_fat_g": 1.26,
    "sodium_mg": 36.0,
    "sugar_g": 10.5,
    "vitamin_a_ug": 74.0,
    "vitamin_c_mg": 9.5,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705548",
  "state": "Unspecified",
  "subcategory": "Formula, prepared from powder",
  "tags": [
    "beverages",
    "formula-prepared-from-powder",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
