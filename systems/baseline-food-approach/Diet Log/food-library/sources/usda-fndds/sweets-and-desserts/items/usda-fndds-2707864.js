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
  "id": "usda-fndds-2707864",
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
      "gramsPerUnit": 6.8,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-regular-cupcake",
      "kind": "unit",
      "label": "1 regular cupcake"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-regular-or-small-piece-slice-1-layer-cake",
      "kind": "unit",
      "label": "1 regular or small piece/slice, 1 layer cake"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-regular-or-small-piece-slice-2-layer-cake",
      "kind": "unit",
      "label": "1 regular or small piece/slice, 2+ layer cake"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-large-piece-slice-1-layer-cake",
      "kind": "unit",
      "label": "1 large piece/slice, 1 layer cake"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-large-piece-slice-2-layer-cake",
      "kind": "unit",
      "label": "1 large piece/slice, 2+ layer cake"
    }
  ],
  "name": "Cake or cupcake, chocolate with white icing, bakery",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 54.4,
    "energy_kcal": 355.0,
    "fat_g": 14.6,
    "fibre_g": 1.2,
    "folate_ug": 23.0,
    "iron_mg": 1.16,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 80.0,
    "protein_g": 2.79,
    "salt_g": 0.74,
    "sat_fat_g": 2.98,
    "sodium_mg": 296.0,
    "sugar_g": 40.2,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.99,
    "vitamin_k_ug": 11.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707864",
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
