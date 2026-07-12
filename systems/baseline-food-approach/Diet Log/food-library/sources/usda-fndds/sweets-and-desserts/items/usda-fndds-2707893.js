/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-regular-or-small-piece-slice-1-layer-cake",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707893",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-regular-or-small-piece-slice-1-layer-cake",
      "kind": "unit",
      "label": "1 regular or small piece/slice, 1 layer cake"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-large-piece-slice-1-layer-cake",
      "kind": "unit",
      "label": "1 large piece/slice, 1 layer cake"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-large-piece-slice-2-layer-cake",
      "kind": "unit",
      "label": "1 large piece/slice, 2+ layer cake"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-regular-or-small-piece-slice-2-layer-cake",
      "kind": "unit",
      "label": "1 regular or small piece/slice, 2+ layer cake"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-regular-cupcake",
      "kind": "unit",
      "label": "1 regular cupcake"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 6.8,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cake or cupcake, white with chocolate icing, bakery",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 52.8,
    "energy_kcal": 349.0,
    "fat_g": 15.0,
    "fibre_g": 0.8,
    "folate_ug": 20.0,
    "iron_mg": 1.44,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 147.0,
    "potassium_mg": 116.0,
    "protein_g": 2.9,
    "salt_g": 0.7825,
    "sat_fat_g": 3.96,
    "sodium_mg": 313.0,
    "sugar_g": 38.8,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.02,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707893",
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
