/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-regular-slice",
  "description": "Cakes and pies",
  "id": "usda-fndds-2708011",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-regular-slice",
      "kind": "unit",
      "label": "1 regular slice"
    },
    {
      "gramsPerUnit": 2000.0,
      "key": "1-large-pie-10-dia-plus",
      "kind": "unit",
      "label": "1 large pie (10\" dia plus)"
    },
    {
      "gramsPerUnit": 18.9,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 1200.0,
      "key": "1-regular-pie-8-9-dia",
      "kind": "unit",
      "label": "1 regular pie (8-9\" dia)"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-mini-small-slice",
      "kind": "unit",
      "label": "1 mini/small slice"
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
      "key": "1-large-slice",
      "kind": "unit",
      "label": "1 large slice"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pie, pumpkin",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 36.3,
    "energy_kcal": 249.0,
    "fat_g": 9.78,
    "fibre_g": 1.7,
    "folate_ug": 25.0,
    "iron_mg": 1.24,
    "magnesium_mg": 19.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 110.0,
    "potassium_mg": 204.0,
    "protein_g": 4.76,
    "salt_g": 0.63,
    "sat_fat_g": 4.11,
    "sodium_mg": 252.0,
    "sugar_g": 24.6,
    "vitamin_a_ug": 327.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 7.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708011",
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
