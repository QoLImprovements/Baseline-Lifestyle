/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "can-5-5-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-171882",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 166.0,
      "key": "can-5-5-oz",
      "kind": "unit",
      "label": "can (5.5 oz)"
    },
    {
      "gramsPerUnit": 30.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Beverages, Clam and tomato juice, canned",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 11.0,
    "energy_kcal": 48.0,
    "fat_g": 0.2,
    "fibre_g": 0.4,
    "folate_ug": 8.0,
    "iron_mg": 0.15,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 89.0,
    "protein_g": 0.6,
    "salt_g": 0.905,
    "sat_fat_g": 0.0,
    "sodium_mg": 362.0,
    "sugar_g": 3.31,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171882",
  "state": "Canned",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "canned",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
