/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "potato-small-1-3-4-to-2-1-2-dia",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170026",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "potato-small-1-3-4-to-2-1-2-dia",
      "kind": "unit",
      "label": "Potato small (1-3/4\" to 2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "0-5-cup-diced",
      "kind": "unit",
      "label": "0.5 cup, diced"
    },
    {
      "gramsPerUnit": 369.0,
      "key": "potato-large-3-to-4-1-4-dia",
      "kind": "unit",
      "label": "Potato large (3\" to 4-1/4\" dia)"
    },
    {
      "gramsPerUnit": 213.0,
      "key": "potato-medium-2-1-4-to-3-1-4-dia",
      "kind": "unit",
      "label": "Potato medium (2-1/4\" to 3-1/4\" dia)"
    }
  ],
  "name": "Potatoes, flesh and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 17.5,
    "energy_kcal": 77.0,
    "fat_g": 0.09,
    "fibre_g": 2.1,
    "folate_ug": 15.0,
    "iron_mg": 0.81,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 425.0,
    "protein_g": 2.05,
    "salt_g": 0.015,
    "sat_fat_g": 0.025,
    "sodium_mg": 6.0,
    "sugar_g": 0.82,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 19.7,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170026",
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
