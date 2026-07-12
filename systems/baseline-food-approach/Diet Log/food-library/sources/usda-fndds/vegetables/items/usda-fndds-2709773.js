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
  "id": "usda-fndds-2709773",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 900.0,
      "key": "1-head",
      "kind": "unit",
      "label": "1 head"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-leaf",
      "kind": "unit",
      "label": "1 leaf"
    }
  ],
  "name": "Cabbage, green, raw",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 6.38,
    "energy_kcal": 31.0,
    "fat_g": 0.23,
    "fibre_g": 2.5,
    "folate_ug": 43.0,
    "iron_mg": 0.07,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 207.0,
    "protein_g": 0.96,
    "salt_g": 0.04,
    "sat_fat_g": 0.034,
    "sodium_mg": 16.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 40.3,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 59.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709773",
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
