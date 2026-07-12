/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "5-slices-1-dia",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169231",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "5-slices-1-dia",
      "kind": "unit",
      "label": "5 slices (1\" dia)"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "0-25-cup-slices-1-dia",
      "kind": "unit",
      "label": "0.25 cup slices (1\" dia)"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Ginger root, raw",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 17.8,
    "energy_kcal": 333.0,
    "fat_g": 0.75,
    "fibre_g": 2.0,
    "folate_ug": 11.0,
    "iron_mg": 0.6,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 415.0,
    "protein_g": 1.82,
    "salt_g": 0.0325,
    "sat_fat_g": 0.203,
    "sodium_mg": 13.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169231",
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
