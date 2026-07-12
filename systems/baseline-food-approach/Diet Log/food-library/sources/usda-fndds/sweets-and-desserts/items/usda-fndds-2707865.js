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
  "id": "usda-fndds-2707865",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-regular-or-small-piece-slice-1-layer-cake",
      "kind": "unit",
      "label": "1 regular or small piece/slice, 1 layer cake"
    },
    {
      "gramsPerUnit": 25.0,
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
      "gramsPerUnit": 225.0,
      "key": "1-large-piece-slice-2-layer-cake",
      "kind": "unit",
      "label": "1 large piece/slice, 2+ layer cake"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-regular-cupcake",
      "kind": "unit",
      "label": "1 regular cupcake"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-regular-or-small-piece-slice-2-layer-cake",
      "kind": "unit",
      "label": "1 regular or small piece/slice, 2+ layer cake"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-large-piece-slice-1-layer-cake",
      "kind": "unit",
      "label": "1 large piece/slice, 1 layer cake"
    }
  ],
  "name": "Cake or cupcake, chocolate with white icing, from mix",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 53.1,
    "energy_kcal": 349.0,
    "fat_g": 14.4,
    "fibre_g": 1.4,
    "folate_ug": 24.0,
    "iron_mg": 1.25,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 84.0,
    "protein_g": 3.05,
    "salt_g": 0.765,
    "sat_fat_g": 2.98,
    "sodium_mg": 306.0,
    "sugar_g": 38.2,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.03,
    "vitamin_k_ug": 11.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707865",
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
