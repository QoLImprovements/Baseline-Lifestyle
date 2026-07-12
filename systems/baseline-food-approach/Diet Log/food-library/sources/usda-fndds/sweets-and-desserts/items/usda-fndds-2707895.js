/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-regular-or-small-piece-slice",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707895",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-regular-or-small-piece-slice",
      "kind": "unit",
      "label": "1 regular or small piece/slice"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-regular-cupcake",
      "kind": "unit",
      "label": "1 regular cupcake"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-large-piece-slice",
      "kind": "unit",
      "label": "1 large piece/slice"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cake or cupcake, white, no icing",
  "nutritionPerBasis": {
    "calcium_mg": 124.0,
    "carbs_g": 44.4,
    "energy_kcal": 310.0,
    "fat_g": 12.8,
    "fibre_g": 0.6,
    "folate_ug": 36.0,
    "iron_mg": 1.46,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 202.0,
    "potassium_mg": 51.0,
    "protein_g": 4.36,
    "salt_g": 1.0475,
    "sat_fat_g": 2.69,
    "sodium_mg": 419.0,
    "sugar_g": 23.4,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.4,
    "vitamin_k_ug": 10.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707895",
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
