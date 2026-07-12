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
  "id": "usda-sr-legacy-170427",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "ring-3-dia-1-4-thick",
      "kind": "unit",
      "label": "ring (3\" dia, 1/4\" thick)"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "10-strips",
      "kind": "unit",
      "label": "10 strips"
    },
    {
      "gramsPerUnit": 164.0,
      "key": "large-2-1-4-per-lb-approx-3-3-4-long-3-dia",
      "kind": "unit",
      "label": "large (2-1/4 per lb, approx 3-3/4\" long, 3\" dia)"
    },
    {
      "gramsPerUnit": 119.0,
      "key": "medium-approx-2-3-4-long-2-1-2-dia",
      "kind": "unit",
      "label": "medium (approx 2-3/4\" long, 2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 9.3,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Peppers, sweet, green, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 4.64,
    "energy_kcal": 84.0,
    "fat_g": 0.17,
    "fibre_g": 1.7,
    "folate_ug": 10.0,
    "iron_mg": 0.34,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 175.0,
    "protein_g": 0.86,
    "salt_g": 0.0075,
    "sat_fat_g": 0.058,
    "sodium_mg": 3.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 80.4,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 7.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170427",
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
