/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170000",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "slice-medium-1-8-thick",
      "kind": "unit",
      "label": "slice, medium (1/8\" thick)"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "medium-2-1-2-dia",
      "kind": "unit",
      "label": "medium (2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "10-rings",
      "kind": "unit",
      "label": "10 rings"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "tbsp-chopped",
      "kind": "unit",
      "label": "tbsp chopped"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "slice-thin",
      "kind": "unit",
      "label": "slice, thin"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "slice-large-1-4-thick",
      "kind": "unit",
      "label": "slice, large (1/4\" thick)"
    }
  ],
  "name": "Onions, raw",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 9.34,
    "energy_kcal": 40.0,
    "fat_g": 0.1,
    "fibre_g": 1.7,
    "folate_ug": 19.0,
    "iron_mg": 0.21,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 146.0,
    "protein_g": 1.1,
    "salt_g": 0.01,
    "sat_fat_g": 0.042,
    "sodium_mg": 4.0,
    "sugar_g": 4.24,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.4,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170000",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
