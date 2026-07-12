/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-miniature",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705638",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    }
  ],
  "name": "Ice cream bar, vanilla",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 37.1,
    "energy_kcal": 358.0,
    "fat_g": 25.3,
    "fibre_g": 1.1,
    "folate_ug": 3.0,
    "iron_mg": 0.0,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 71.0,
    "protein_g": 2.11,
    "salt_g": 0.21,
    "sat_fat_g": 17.9,
    "sodium_mg": 84.0,
    "sugar_g": 21.0,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.25,
    "vitamin_k_ug": 22.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705638",
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
