/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "fl-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172194",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Milk, canned, evaporated, with added vitamin A",
  "nutritionPerBasis": {
    "calcium_mg": 261.0,
    "carbs_g": 10.0,
    "energy_kcal": 134.0,
    "fat_g": 7.56,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.19,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 203.0,
    "potassium_mg": 303.0,
    "protein_g": 6.81,
    "salt_g": 0.265,
    "sat_fat_g": 4.59,
    "sodium_mg": 106.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 397.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172194",
  "state": "Canned",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "canned",
    "dairy-and-egg-products",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
