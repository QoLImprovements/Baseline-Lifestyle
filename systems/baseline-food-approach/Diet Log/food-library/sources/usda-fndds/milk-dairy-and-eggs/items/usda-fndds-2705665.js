/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-large-ice-cream-cup",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705665",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-large-ice-cream-cup",
      "kind": "unit",
      "label": "1 large ice cream cup"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-scoop",
      "kind": "unit",
      "label": "1 scoop"
    },
    {
      "gramsPerUnit": 9.2,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-small-ice-cream-cup",
      "kind": "unit",
      "label": "1 small ice cream cup"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-medium-ice-cream-cup",
      "kind": "unit",
      "label": "1 medium ice cream cup"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Light ice cream, vanilla",
  "nutritionPerBasis": {
    "calcium_mg": 148.0,
    "carbs_g": 25.4,
    "energy_kcal": 174.0,
    "fat_g": 6.14,
    "fibre_g": 0.2,
    "folate_ug": 5.0,
    "iron_mg": 0.19,
    "magnesium_mg": 12.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 89.0,
    "potassium_mg": 202.0,
    "protein_g": 4.38,
    "salt_g": 0.2125,
    "sat_fat_g": 3.49,
    "sodium_mg": 85.0,
    "sugar_g": 14.3,
    "vitamin_a_ug": 107.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705665",
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
