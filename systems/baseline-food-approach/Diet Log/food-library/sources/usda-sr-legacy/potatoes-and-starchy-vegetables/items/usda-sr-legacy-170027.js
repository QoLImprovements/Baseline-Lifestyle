/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "0-5-cup-diced",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170027",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "label": "potato large (3\" to 4-1/4\" dia)"
    },
    {
      "gramsPerUnit": 213.0,
      "key": "potato-medium-2-1-4-to-3-1-4-dia",
      "kind": "unit",
      "label": "Potato medium (2-1/4\" to 3-1/4\" dia)"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "potato-small-1-3-4-to-2-1-4-dia",
      "kind": "unit",
      "label": "Potato small (1-3/4\" to 2-1/4\" dia)"
    }
  ],
  "name": "Potatoes, russet, flesh and skin, raw (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 18.1,
    "energy_kcal": 332.0,
    "fat_g": 0.08,
    "fibre_g": 1.3,
    "folate_ug": 14.0,
    "iron_mg": 0.86,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 417.0,
    "protein_g": 2.14,
    "salt_g": 0.0125,
    "sat_fat_g": 0.026,
    "sodium_mg": 5.0,
    "sugar_g": 0.62,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170027",
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
