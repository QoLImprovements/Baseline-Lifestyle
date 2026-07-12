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
  "id": "usda-sr-legacy-171275",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 306.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Milk, canned, condensed, sweetened",
  "nutritionPerBasis": {
    "calcium_mg": 284.0,
    "carbs_g": 54.4,
    "energy_kcal": 1340.0,
    "fat_g": 8.7,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.19,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 253.0,
    "potassium_mg": 371.0,
    "protein_g": 7.91,
    "salt_g": 0.3175,
    "sat_fat_g": 5.49,
    "sodium_mg": 127.0,
    "sugar_g": 54.4,
    "vitamin_a_ug": 74.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171275",
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
