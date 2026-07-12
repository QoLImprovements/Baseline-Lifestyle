/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "1-cinnabon",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2707668",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cinnabon",
      "kind": "unit",
      "label": "1 Cinnabon"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "1-papa-john-stick",
      "kind": "unit",
      "label": "1 Papa John stick"
    },
    {
      "gramsPerUnit": 6.5,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "1-pizza-hut-stick",
      "kind": "unit",
      "label": "1 Pizza Hut stick"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 153.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-miniature-roll",
      "kind": "unit",
      "label": "1 miniature roll"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "1-little-debbie",
      "kind": "unit",
      "label": "1 Little Debbie"
    }
  ],
  "name": "Roll, sweet, cinnamon bun, frosted",
  "nutritionPerBasis": {
    "calcium_mg": 183.0,
    "carbs_g": 48.6,
    "energy_kcal": 452.0,
    "fat_g": 26.6,
    "fibre_g": 1.2,
    "folate_ug": 72.0,
    "iron_mg": 1.37,
    "magnesium_mg": 14.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 131.0,
    "potassium_mg": 102.0,
    "protein_g": 4.45,
    "salt_g": 0.7625,
    "sat_fat_g": 12.6,
    "sodium_mg": 305.0,
    "sugar_g": 25.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 1.15,
    "vitamin_k_ug": 15.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707668",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
