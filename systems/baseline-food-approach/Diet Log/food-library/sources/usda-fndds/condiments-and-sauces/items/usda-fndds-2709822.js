/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-mcdonald-s-side-salad",
  "description": "Lettuce and lettuce salads",
  "id": "usda-fndds-2709822",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "1-mcdonald-s-side-salad",
      "kind": "unit",
      "label": "1 McDonald's side salad"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "1-side-salad",
      "kind": "unit",
      "label": "1 side salad"
    },
    {
      "gramsPerUnit": 98.0,
      "key": "1-burger-king-side-salad",
      "kind": "unit",
      "label": "1 Burger King side salad"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "1-wendy-s-side-salad",
      "kind": "unit",
      "label": "1 Wendy's side salad"
    }
  ],
  "name": "Lettuce, salad with assorted vegetables including tomatoes and/or carrots, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 4.58,
    "energy_kcal": 24.0,
    "fat_g": 0.2,
    "fibre_g": 1.5,
    "folate_ug": 39.0,
    "iron_mg": 0.31,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 272.0,
    "protein_g": 1.07,
    "salt_g": 0.0975,
    "sat_fat_g": 0.035,
    "sodium_mg": 39.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 239.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 88.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709822",
  "state": "Unspecified",
  "subcategory": "Lettuce and lettuce salads",
  "tags": [
    "condiments-and-sauces",
    "lettuce-and-lettuce-salads",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
