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
  "id": "usda-fndds-2708002",
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
      "gramsPerUnit": 2000.0,
      "key": "1-large-pie-10-dia-plus",
      "kind": "unit",
      "label": "1 large pie (10\" dia plus)"
    },
    {
      "gramsPerUnit": 1200.0,
      "key": "1-regular-pie-8-9-dia",
      "kind": "unit",
      "label": "1 regular pie (8-9\" dia)"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-regular-slice",
      "kind": "unit",
      "label": "1 regular slice"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-large-slice",
      "kind": "unit",
      "label": "1 large slice"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-individual-pie",
      "kind": "unit",
      "label": "1 individual pie"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-mini-small-slice",
      "kind": "unit",
      "label": "1 mini/small slice"
    }
  ],
  "name": "Pie, peach",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 37.1,
    "energy_kcal": 296.0,
    "fat_g": 15.3,
    "fibre_g": 1.9,
    "folate_ug": 29.0,
    "iron_mg": 1.3,
    "magnesium_mg": 10.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 39.0,
    "potassium_mg": 110.0,
    "protein_g": 2.83,
    "salt_g": 0.5475,
    "sat_fat_g": 5.34,
    "sodium_mg": 219.0,
    "sugar_g": 15.7,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708002",
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
