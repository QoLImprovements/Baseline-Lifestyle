/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "bar-1-4-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-168755",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "bar-1-4-oz",
      "kind": "unit",
      "label": "bar (1.4 oz)"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "bar-1-45-oz",
      "kind": "unit",
      "label": "bar (1.45 oz)"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "bar-1-55-oz",
      "kind": "unit",
      "label": "bar (1.55 oz)"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "bar-miniature",
      "kind": "unit",
      "label": "bar, miniature"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "bar-1-65-oz",
      "kind": "unit",
      "label": "bar (1.65 oz)"
    }
  ],
  "name": "Candies, milk chocolate, with rice cereal",
  "nutritionPerBasis": {
    "calcium_mg": 187.0,
    "carbs_g": 59.7,
    "energy_kcal": 2140.0,
    "fat_g": 29.4,
    "fibre_g": 3.3,
    "folate_ug": 18.0,
    "iron_mg": 2.65,
    "magnesium_mg": 62.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 207.0,
    "potassium_mg": 370.0,
    "protein_g": 7.64,
    "salt_g": 0.215,
    "sat_fat_g": 15.9,
    "sodium_mg": 86.0,
    "sugar_g": 51.1,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168755",
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
