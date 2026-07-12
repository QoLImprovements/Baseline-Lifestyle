/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "yam",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168432",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 420.0,
      "key": "yam",
      "kind": "unit",
      "label": "yam"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "0-5-cup-cubes",
      "kind": "unit",
      "label": "0.5 cup, cubes"
    }
  ],
  "name": "Mountain yam, hawaii, raw",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 16.3,
    "energy_kcal": 280.0,
    "fat_g": 0.1,
    "fibre_g": 2.5,
    "folate_ug": 14.0,
    "iron_mg": 0.44,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 418.0,
    "protein_g": 1.34,
    "salt_g": 0.0325,
    "sat_fat_g": 0.022,
    "sodium_mg": 13.0,
    "sugar_g": 0.31,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168432",
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
