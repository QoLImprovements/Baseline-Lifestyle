/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-slice",
  "description": "Tomatoes",
  "id": "usda-fndds-2709719",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cherry",
      "kind": "unit",
      "label": "1 cherry"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-plum-tomato",
      "kind": "unit",
      "label": "1 plum tomato"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-italian-tomato",
      "kind": "unit",
      "label": "1 Italian tomato"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-grape-tomato",
      "kind": "unit",
      "label": "1 grape tomato"
    }
  ],
  "name": "Tomatoes, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 4.04,
    "energy_kcal": 20.0,
    "fat_g": 0.31,
    "fibre_g": 1.2,
    "folate_ug": 13.0,
    "iron_mg": 0.22,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 226.0,
    "protein_g": 0.82,
    "salt_g": 0.01,
    "sat_fat_g": 0.028,
    "sodium_mg": 4.0,
    "sugar_g": 2.63,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 16.3,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709719",
  "state": "Raw",
  "subcategory": "Tomatoes",
  "tags": [
    "other-foods",
    "raw",
    "tomatoes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
