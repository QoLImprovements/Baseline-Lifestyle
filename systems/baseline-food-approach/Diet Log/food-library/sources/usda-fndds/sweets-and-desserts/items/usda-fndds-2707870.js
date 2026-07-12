/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-piece-slice-any-size",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707870",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-piece-slice-any-size",
      "kind": "unit",
      "label": "1 piece/slice, any size"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-cupcake-any-size",
      "kind": "unit",
      "label": "1 cupcake, any size"
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
    }
  ],
  "name": "Cake or cupcake, gluten free",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 37.9,
    "energy_kcal": 410.0,
    "fat_g": 29.4,
    "fibre_g": 2.4,
    "folate_ug": 19.0,
    "iron_mg": 1.7,
    "magnesium_mg": 50.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 102.0,
    "potassium_mg": 186.0,
    "protein_g": 4.87,
    "salt_g": 0.2975,
    "sat_fat_g": 16.2,
    "sodium_mg": 119.0,
    "sugar_g": 34.0,
    "vitamin_a_ug": 179.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707870",
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
