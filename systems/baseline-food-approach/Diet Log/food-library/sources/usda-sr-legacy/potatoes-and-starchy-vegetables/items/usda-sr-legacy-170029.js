/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "potato-large-3-to-4-1-4-dia",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170029",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 369.0,
      "key": "potato-large-3-to-4-1-4-dia",
      "kind": "unit",
      "label": "potato large (3\" to 4-1/4\" dia)"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "potato-small-1-3-4-to-2-1-4-dia",
      "kind": "unit",
      "label": "potato small (1-3/4\" to 2-1/4\" dia)"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "0-5-cup-diced",
      "kind": "unit",
      "label": "0.5 cup, diced"
    },
    {
      "gramsPerUnit": 213.0,
      "key": "potato-medium-2-1-4-to-3-1-4-dia",
      "kind": "unit",
      "label": "potato medium (2-1/4\" to 3-1/4\" dia)"
    }
  ],
  "name": "Potatoes, red, flesh and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 15.9,
    "energy_kcal": 295.0,
    "fat_g": 0.14,
    "fibre_g": 1.7,
    "folate_ug": 18.0,
    "iron_mg": 0.73,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 455.0,
    "protein_g": 1.89,
    "salt_g": 0.045,
    "sat_fat_g": 0.035,
    "sodium_mg": 18.0,
    "sugar_g": 1.29,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.6,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170029",
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
