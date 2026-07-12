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
  "id": "usda-fndds-2707874",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-piece-slice-any-size-except-mini",
      "kind": "unit",
      "label": "1 piece/slice, any size, except mini"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-regular-cupcake",
      "kind": "unit",
      "label": "1 regular cupcake"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-snack-cake",
      "kind": "unit",
      "label": "1 snack cake"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    }
  ],
  "name": "Snack cake, white",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 64.0,
    "energy_kcal": 374.0,
    "fat_g": 11.5,
    "fibre_g": 1.0,
    "folate_ug": 38.0,
    "iron_mg": 1.36,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 185.0,
    "potassium_mg": 71.0,
    "protein_g": 3.47,
    "salt_g": 1.175,
    "sat_fat_g": 4.14,
    "sodium_mg": 470.0,
    "sugar_g": 37.3,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 9.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707874",
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
