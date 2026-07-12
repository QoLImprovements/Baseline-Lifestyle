/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-5-cup",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171302",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 31.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 369.0,
      "key": "can-13-oz",
      "kind": "unit",
      "label": "can (13 oz)"
    }
  ],
  "name": "Milk, evaporated, 2% fat, with added vitamin A and vitamin D",
  "nutritionPerBasis": {
    "calcium_mg": 267.0,
    "carbs_g": 15.7,
    "energy_kcal": 448.0,
    "fat_g": 2.0,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.19,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 203.0,
    "potassium_mg": 303.0,
    "protein_g": 6.67,
    "salt_g": 0.25,
    "sat_fat_g": 1.2,
    "sodium_mg": 100.0,
    "sugar_g": 6.67,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 16.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171302",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
