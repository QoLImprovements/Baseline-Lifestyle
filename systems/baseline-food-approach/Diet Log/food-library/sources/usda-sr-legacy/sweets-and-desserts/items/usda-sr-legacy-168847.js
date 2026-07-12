/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "0-5-cup-4-fl-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-168847",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "0-5-cup-4-fl-oz",
      "kind": "unit",
      "label": "0.5 cup (4 fl oz)"
    }
  ],
  "name": "Frozen novelties, ice type, pineapple-coconut",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 23.9,
    "energy_kcal": 473.0,
    "fat_g": 2.6,
    "fibre_g": 0.7,
    "folate_ug": 1.0,
    "iron_mg": 3.53,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 17.0,
    "protein_g": 0.0,
    "salt_g": 0.0875,
    "sat_fat_g": 2.3,
    "sodium_mg": 35.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 13.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168847",
  "state": "Frozen",
  "subcategory": "Sweets",
  "tags": [
    "frozen",
    "sweets",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
