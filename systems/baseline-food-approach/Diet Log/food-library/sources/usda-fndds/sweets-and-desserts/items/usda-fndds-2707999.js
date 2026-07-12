/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-mini-small-slice",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707999",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-mini-small-slice",
      "kind": "unit",
      "label": "1 mini/small slice"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-regular-slice",
      "kind": "unit",
      "label": "1 regular slice"
    },
    {
      "gramsPerUnit": 1200.0,
      "key": "1-regular-pie-8-9-dia",
      "kind": "unit",
      "label": "1 regular pie (8-9\" dia)"
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
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pie, cherry",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 40.9,
    "energy_kcal": 311.0,
    "fat_g": 15.3,
    "fibre_g": 1.9,
    "folate_ug": 29.0,
    "iron_mg": 1.28,
    "magnesium_mg": 11.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 40.0,
    "potassium_mg": 101.0,
    "protein_g": 2.95,
    "salt_g": 0.5425,
    "sat_fat_g": 5.35,
    "sodium_mg": 217.0,
    "sugar_g": 19.5,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707999",
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
