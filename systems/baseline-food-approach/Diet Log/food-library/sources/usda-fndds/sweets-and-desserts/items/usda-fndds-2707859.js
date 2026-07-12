/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cupcake-any-size",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707859",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-cupcake-any-size",
      "kind": "unit",
      "label": "1 cupcake, any size"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-piece-slice-any-size",
      "kind": "unit",
      "label": "1 piece/slice, any size"
    }
  ],
  "name": "Cake or cupcake, carrot",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 51.8,
    "energy_kcal": 374.0,
    "fat_g": 17.5,
    "fibre_g": 1.1,
    "folate_ug": 25.0,
    "iron_mg": 0.9,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 112.0,
    "potassium_mg": 74.0,
    "protein_g": 2.49,
    "salt_g": 0.72,
    "sat_fat_g": 3.19,
    "sodium_mg": 288.0,
    "sugar_g": 38.5,
    "vitamin_a_ug": 100.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 2.71,
    "vitamin_k_ug": 16.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707859",
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
