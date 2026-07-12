/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-regular-cupcake",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707873",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-regular-cupcake",
      "kind": "unit",
      "label": "1 regular cupcake"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-piece-slice-any-size-except-mini",
      "kind": "unit",
      "label": "1 piece/slice, any size, except mini"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-snack-cake",
      "kind": "unit",
      "label": "1 snack cake"
    }
  ],
  "name": "Snack cake, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 116.0,
    "carbs_g": 60.3,
    "energy_kcal": 399.0,
    "fat_g": 15.9,
    "fibre_g": 3.2,
    "folate_ug": 26.0,
    "iron_mg": 3.6,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 87.0,
    "potassium_mg": 176.0,
    "protein_g": 3.63,
    "salt_g": 0.83,
    "sat_fat_g": 4.88,
    "sodium_mg": 332.0,
    "sugar_g": 37.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 1.09,
    "vitamin_k_ug": 10.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707873",
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
