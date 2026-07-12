/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "small-1-3-4-to-2-1-4-dia",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170028",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "small-1-3-4-to-2-1-4-dia",
      "kind": "unit",
      "label": "small (1-3/4\" to 2-1/4\" dia.)"
    },
    {
      "gramsPerUnit": 369.0,
      "key": "large-3-to-4-1-4-dia",
      "kind": "unit",
      "label": "large (3\" to 4-1/4\" dia.)"
    },
    {
      "gramsPerUnit": 213.0,
      "key": "medium-2-1-4-to-3-1-4-dia",
      "kind": "unit",
      "label": "medium (2+-1/4\" to 3-1/4\" dia.)"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "0-5-cup-diced",
      "kind": "unit",
      "label": "0.5 cup, diced"
    }
  ],
  "name": "Potatoes, white, flesh and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 15.7,
    "energy_kcal": 69.0,
    "fat_g": 0.1,
    "fibre_g": 2.4,
    "folate_ug": 18.0,
    "iron_mg": 0.52,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 407.0,
    "protein_g": 1.68,
    "salt_g": 0.04,
    "sat_fat_g": 0.026,
    "sodium_mg": 16.0,
    "sugar_g": 1.15,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.1,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170028",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
