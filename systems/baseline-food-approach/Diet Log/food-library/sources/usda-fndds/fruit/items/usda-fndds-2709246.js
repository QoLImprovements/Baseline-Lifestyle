/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup-mashed",
  "description": "Mango and papaya",
  "id": "usda-fndds-2709246",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    },
    {
      "gramsPerUnit": 330.0,
      "key": "1-fruit",
      "kind": "unit",
      "label": "1 fruit"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-slice-chunk",
      "kind": "unit",
      "label": "1 slice/chunk"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Papaya, raw",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 10.8,
    "energy_kcal": 43.0,
    "fat_g": 0.26,
    "fibre_g": 1.7,
    "folate_ug": 37.0,
    "iron_mg": 0.25,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 182.0,
    "protein_g": 0.47,
    "salt_g": 0.02,
    "sat_fat_g": 0.081,
    "sodium_mg": 8.0,
    "sugar_g": 7.82,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 60.9,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709246",
  "state": "Raw",
  "subcategory": "Mango and papaya",
  "tags": [
    "fruit",
    "mango-and-papaya",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
