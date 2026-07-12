/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-surface-inch",
  "description": "Cakes and pies",
  "id": "usda-fndds-2708016",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "key": "1-slice-any-size",
      "kind": "unit",
      "label": "1 slice, any size"
    }
  ],
  "name": "Pie, oatmeal",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 56.9,
    "energy_kcal": 396.0,
    "fat_g": 16.0,
    "fibre_g": 2.2,
    "folate_ug": 38.0,
    "iron_mg": 1.76,
    "magnesium_mg": 22.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 108.0,
    "potassium_mg": 105.0,
    "protein_g": 6.14,
    "salt_g": 0.7875,
    "sat_fat_g": 5.83,
    "sodium_mg": 315.0,
    "sugar_g": 32.1,
    "vitamin_a_ug": 67.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708016",
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
