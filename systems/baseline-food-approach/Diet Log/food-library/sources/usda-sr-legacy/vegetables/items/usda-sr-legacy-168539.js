/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "ear-large-7-3-4-to-9-long",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168539",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "ear-large-7-3-4-to-9-long",
      "kind": "unit",
      "label": "ear, large (7-3/4\" to 9\" long)"
    },
    {
      "gramsPerUnit": 157.0,
      "key": "cup-cut",
      "kind": "unit",
      "label": "cup cut"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "ear-yields",
      "kind": "unit",
      "label": "ear, yields"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "ear-small-5-1-2-to-6-1-2-long",
      "kind": "unit",
      "label": "ear, small (5-1/2\" to 6-1/2\" long)"
    },
    {
      "gramsPerUnit": 103.0,
      "key": "ear-medium-6-3-4-to-7-1-2-long",
      "kind": "unit",
      "label": "ear, medium (6-3/4\" to 7-1/2\" long)"
    }
  ],
  "name": "Corn, sweet, white, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 21.7,
    "energy_kcal": 97.0,
    "fat_g": 1.41,
    "fibre_g": 2.7,
    "folate_ug": 20.0,
    "iron_mg": 0.55,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 252.0,
    "protein_g": 3.34,
    "salt_g": 0.0075,
    "sat_fat_g": 0.197,
    "sodium_mg": 3.0,
    "sugar_g": 7.73,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.2,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168539",
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
