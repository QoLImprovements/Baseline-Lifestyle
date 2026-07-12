/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cabbage",
  "id": "usda-fndds-2709774",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 840.0,
      "key": "1-head",
      "kind": "unit",
      "label": "1 head"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-leaf",
      "kind": "unit",
      "label": "1 leaf"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cabbage, Chinese, raw",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 2.18,
    "energy_kcal": 13.0,
    "fat_g": 0.2,
    "fibre_g": 1.0,
    "folate_ug": 66.0,
    "iron_mg": 0.8,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 252.0,
    "protein_g": 1.5,
    "salt_g": 0.1625,
    "sat_fat_g": 0.027,
    "sodium_mg": 65.0,
    "sugar_g": 1.18,
    "vitamin_a_ug": 223.0,
    "vitamin_c_mg": 45.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 45.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709774",
  "state": "Raw",
  "subcategory": "Cabbage",
  "tags": [
    "cabbage",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
