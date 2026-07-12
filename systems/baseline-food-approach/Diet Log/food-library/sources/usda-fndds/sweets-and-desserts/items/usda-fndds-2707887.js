/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cup",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707887",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-cupcake-any-size",
      "kind": "unit",
      "label": "1 cupcake, any size"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-piece-slice-any-size",
      "kind": "unit",
      "label": "1 piece/slice, any size"
    }
  ],
  "name": "Cake or cupcake, strawberry",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 50.2,
    "energy_kcal": 326.0,
    "fat_g": 12.9,
    "fibre_g": 0.5,
    "folate_ug": 22.0,
    "iron_mg": 0.87,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 52.0,
    "protein_g": 2.22,
    "salt_g": 0.7075,
    "sat_fat_g": 2.53,
    "sodium_mg": 283.0,
    "sugar_g": 37.4,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 3.3,
    "vitamin_e_mg": 1.84,
    "vitamin_k_ug": 10.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707887",
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
