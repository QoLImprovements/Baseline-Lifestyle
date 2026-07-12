/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-side-salad",
  "description": "Lettuce and lettuce salads",
  "id": "usda-fndds-2709827",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "1-side-salad",
      "kind": "unit",
      "label": "1 side salad"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 236.0,
      "key": "1-garden-salad",
      "kind": "unit",
      "label": "1 garden salad"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Lettuce, salad with egg, cheese, tomato, and/or carrots, with or without other vegetables, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 3.7,
    "energy_kcal": 71.0,
    "fat_g": 4.36,
    "fibre_g": 1.2,
    "folate_ug": 36.0,
    "iron_mg": 0.37,
    "magnesium_mg": 18.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 81.0,
    "potassium_mg": 239.0,
    "protein_g": 4.24,
    "salt_g": 0.265,
    "sat_fat_g": 2.1,
    "sodium_mg": 106.0,
    "sugar_g": 1.63,
    "vitamin_a_ug": 230.0,
    "vitamin_c_mg": 7.8,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 61.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709827",
  "state": "Unspecified",
  "subcategory": "Lettuce and lettuce salads",
  "tags": [
    "lettuce-and-lettuce-salads",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
