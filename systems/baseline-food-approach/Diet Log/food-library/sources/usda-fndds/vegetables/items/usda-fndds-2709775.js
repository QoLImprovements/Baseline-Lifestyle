/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-head",
  "description": "Cabbage",
  "id": "usda-fndds-2709775",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 840.0,
      "key": "1-head",
      "kind": "unit",
      "label": "1 head"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-leaf",
      "kind": "unit",
      "label": "1 leaf"
    }
  ],
  "name": "Cabbage, red, raw",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 6.79,
    "energy_kcal": 34.0,
    "fat_g": 0.21,
    "fibre_g": 2.1,
    "folate_ug": 18.0,
    "iron_mg": 0.0,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 269.0,
    "protein_g": 1.24,
    "salt_g": 0.03,
    "sat_fat_g": 0.021,
    "sodium_mg": 12.0,
    "sugar_g": 3.83,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 53.9,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 32.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709775",
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
