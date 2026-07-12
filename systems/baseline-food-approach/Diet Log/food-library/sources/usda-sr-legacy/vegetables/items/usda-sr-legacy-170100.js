/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "tbsp-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170100",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp-chopped",
      "kind": "unit",
      "label": "tbsp chopped"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "slice-thin",
      "kind": "unit",
      "label": "slice thin"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "slice-medium-1-8-thick",
      "kind": "unit",
      "label": "slice medium (1/8\" thick)"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "slice-large-1-4-thick",
      "kind": "unit",
      "label": "slice large (1/4\" thick)"
    }
  ],
  "name": "Onions, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 9.56,
    "energy_kcal": 42.0,
    "fat_g": 0.19,
    "fibre_g": 1.4,
    "folate_ug": 15.0,
    "iron_mg": 0.24,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.0,
    "potassium_mg": 166.0,
    "protein_g": 1.36,
    "salt_g": 0.5975,
    "sat_fat_g": 0.031,
    "sodium_mg": 239.0,
    "sugar_g": 4.73,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.2,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170100",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
