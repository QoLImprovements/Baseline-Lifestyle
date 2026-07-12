/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707879",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
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
  "name": "Cake or cupcake, lemon",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 51.9,
    "energy_kcal": 339.0,
    "fat_g": 13.5,
    "fibre_g": 0.4,
    "folate_ug": 24.0,
    "iron_mg": 0.87,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 119.0,
    "potassium_mg": 47.0,
    "protein_g": 2.42,
    "salt_g": 0.76,
    "sat_fat_g": 2.67,
    "sodium_mg": 304.0,
    "sugar_g": 38.2,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 1.94,
    "vitamin_k_ug": 11.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707879",
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
