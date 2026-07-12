/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "0-5-cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170520",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 167.0,
      "key": "medium-2-1-4-to-2-1-4-dia",
      "kind": "unit",
      "label": "medium (2-1/4\" to 2-1/4\" dia.)"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "small-1-3-4-to-2-1-2-dia",
      "kind": "unit",
      "label": "small (1-3/4\" to 2-1/2\" dia.)"
    },
    {
      "gramsPerUnit": 300.0,
      "key": "large-3-to-4-1-4-dia",
      "kind": "unit",
      "label": "large (3\" to 4-1/4\" dia.)"
    }
  ],
  "name": "Potatoes, boiled, cooked without skin, flesh, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 20.0,
    "energy_kcal": 360.0,
    "fat_g": 0.1,
    "fibre_g": 2.0,
    "folate_ug": 9.0,
    "iron_mg": 0.31,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 328.0,
    "protein_g": 1.71,
    "salt_g": 0.6025,
    "sat_fat_g": 0.026,
    "sodium_mg": 241.0,
    "sugar_g": 0.89,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.4,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170520",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
