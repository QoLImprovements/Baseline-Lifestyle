/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-individual-container",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705632",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-large-ice-cream-cup",
      "kind": "unit",
      "label": "1 large ice cream cup"
    },
    {
      "gramsPerUnit": 9.2,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-medium-ice-cream-cup",
      "kind": "unit",
      "label": "1 medium ice cream cup"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-scoop",
      "kind": "unit",
      "label": "1 scoop"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-small-ice-cream-cup",
      "kind": "unit",
      "label": "1 small ice cream cup"
    }
  ],
  "name": "Ice cream, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 28.2,
    "energy_kcal": 216.0,
    "fat_g": 11.0,
    "fibre_g": 1.2,
    "folate_ug": 16.0,
    "iron_mg": 0.93,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 249.0,
    "protein_g": 3.8,
    "salt_g": 0.19,
    "sat_fat_g": 6.8,
    "sodium_mg": 76.0,
    "sugar_g": 25.4,
    "vitamin_a_ug": 118.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705632",
  "state": "Unspecified",
  "subcategory": "Ice cream and frozen dairy desserts",
  "tags": [
    "ice-cream-and-frozen-dairy-desserts",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
