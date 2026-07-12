/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-slice-any-size",
  "description": "Cakes and pies",
  "id": "usda-fndds-2708001",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-slice-any-size",
      "kind": "unit",
      "label": "1 slice, any size"
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
      "gramsPerUnit": 150.0,
      "key": "1-individual-pie",
      "kind": "unit",
      "label": "1 individual pie"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 18.9,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    }
  ],
  "name": "Pie, key lime",
  "nutritionPerBasis": {
    "calcium_mg": 187.0,
    "carbs_g": 42.2,
    "energy_kcal": 322.0,
    "fat_g": 14.9,
    "fibre_g": 0.3,
    "folate_ug": 16.0,
    "iron_mg": 0.46,
    "magnesium_mg": 20.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 179.0,
    "potassium_mg": 256.0,
    "protein_g": 5.78,
    "salt_g": 0.455,
    "sat_fat_g": 7.59,
    "sodium_mg": 182.0,
    "sugar_g": 35.9,
    "vitamin_a_ug": 103.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708001",
  "state": "Unspecified",
  "subcategory": "Cakes and pies",
  "tags": [
    "cakes-and-pies",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
