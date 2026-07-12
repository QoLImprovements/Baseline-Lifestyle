/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "bar-2-4-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-167984",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "bar-2-4-oz",
      "kind": "unit",
      "label": "bar 2.4 oz"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "bar-1-5-oz",
      "kind": "unit",
      "label": "bar 1.5 oz"
    }
  ],
  "name": "Candies, SYMPHONY Milk Chocolate Bar",
  "nutritionPerBasis": {
    "calcium_mg": 251.0,
    "carbs_g": 58.0,
    "energy_kcal": 531.0,
    "fat_g": 30.6,
    "fibre_g": 1.7,
    "folate_ug": 0.0,
    "iron_mg": 0.91,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 206.0,
    "potassium_mg": 438.0,
    "protein_g": 8.51,
    "salt_g": 0.2525,
    "sat_fat_g": 18.3,
    "sodium_mg": 101.0,
    "sugar_g": 54.0,
    "vitamin_a_ug": 229.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167984",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
