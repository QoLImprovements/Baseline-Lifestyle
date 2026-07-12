/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "container",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172110",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 422.0,
      "key": "container",
      "kind": "unit",
      "label": "container"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Chili with beans, microwavable bowls",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 10.9,
    "energy_kcal": 100.0,
    "fat_g": 3.68,
    "fibre_g": 2.9,
    "folate_ug": 24.0,
    "iron_mg": 1.13,
    "magnesium_mg": 25.0,
    "omega3_g": 0.095,
    "phosphorus_mg": 80.0,
    "potassium_mg": 245.0,
    "protein_g": 5.85,
    "salt_g": 0.9625,
    "sat_fat_g": 1.37,
    "sodium_mg": 385.0,
    "sugar_g": 1.84,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172110",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "legumes-and-pulses",
    "meals-entrees-and-side-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
