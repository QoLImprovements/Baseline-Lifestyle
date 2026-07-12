/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving-5-pieces",
  "description": "Sweets",
  "id": "usda-sr-legacy-168804",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "serving-5-pieces",
      "kind": "unit",
      "label": "serving 5 pieces"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "serving-1-30-oz-bar",
      "kind": "unit",
      "label": "serving 1.30 oz bar"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, DOVE Milk Chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 59.8,
    "energy_kcal": 546.0,
    "fat_g": 31.7,
    "fibre_g": 2.4,
    "folate_ug": 0.0,
    "iron_mg": 1.11,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 5.94,
    "salt_g": 0.1575,
    "sat_fat_g": 19.2,
    "sodium_mg": 63.0,
    "sugar_g": 55.4,
    "vitamin_a_ug": 292.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168804",
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
