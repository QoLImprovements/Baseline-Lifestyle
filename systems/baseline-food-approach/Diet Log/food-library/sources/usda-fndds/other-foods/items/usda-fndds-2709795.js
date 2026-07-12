/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup",
  "description": "Onions",
  "id": "usda-fndds-2709795",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-ring",
      "kind": "unit",
      "label": "1 ring"
    }
  ],
  "name": "Onions, raw",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 8.46,
    "energy_kcal": 38.0,
    "fat_g": 0.08,
    "fibre_g": 1.7,
    "folate_ug": 19.0,
    "iron_mg": 0.24,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 171.0,
    "protein_g": 0.86,
    "salt_g": 0.0025,
    "sat_fat_g": 0.042,
    "sodium_mg": 1.0,
    "sugar_g": 5.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.2,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709795",
  "state": "Raw",
  "subcategory": "Onions",
  "tags": [
    "onions",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
