/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-pie-any-size",
  "description": "Cakes and pies",
  "id": "usda-fndds-2708003",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1600.0,
      "key": "1-pie-any-size",
      "kind": "unit",
      "label": "1 pie, any size"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 18.9,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-individual-pie",
      "kind": "unit",
      "label": "1 individual pie"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-slice-any-size",
      "kind": "unit",
      "label": "1 slice, any size"
    }
  ],
  "name": "Pie, strawberry",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 44.2,
    "energy_kcal": 289.0,
    "fat_g": 11.6,
    "fibre_g": 2.2,
    "folate_ug": 41.0,
    "iron_mg": 1.37,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 89.0,
    "protein_g": 2.88,
    "salt_g": 0.4725,
    "sat_fat_g": 3.72,
    "sodium_mg": 189.0,
    "sugar_g": 22.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 15.8,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708003",
  "state": "Raw",
  "subcategory": "Cakes and pies",
  "tags": [
    "cakes-and-pies",
    "raw",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
