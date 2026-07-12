/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar-1-75-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-168760",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 49.0,
      "key": "bar-1-75-oz",
      "kind": "unit",
      "label": "bar (1.75 oz)"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "bar-2-6-oz",
      "kind": "unit",
      "label": "bar (2.6 oz)"
    }
  ],
  "name": "Candies, MR. GOODBAR Chocolate Bar",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 54.3,
    "energy_kcal": 538.0,
    "fat_g": 33.2,
    "fibre_g": 3.8,
    "folate_ug": 38.0,
    "iron_mg": 1.39,
    "magnesium_mg": 47.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 163.0,
    "potassium_mg": 394.0,
    "protein_g": 10.2,
    "salt_g": 0.1025,
    "sat_fat_g": 14.1,
    "sodium_mg": 41.0,
    "sugar_g": 47.2,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 3.17,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168760",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
