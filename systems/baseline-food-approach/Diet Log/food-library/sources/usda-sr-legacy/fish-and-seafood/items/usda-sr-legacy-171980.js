/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "6-medium",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-171980",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "6-medium",
      "kind": "unit",
      "label": "6 medium"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Mollusks, oyster, eastern, wild, cooked, moist heat",
  "nutritionPerBasis": {
    "calcium_mg": 116.0,
    "carbs_g": 5.45,
    "energy_kcal": 102.0,
    "fat_g": 3.42,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 9.21,
    "magnesium_mg": 35.0,
    "omega3_g": 0.807,
    "phosphorus_mg": 194.0,
    "potassium_mg": 139.0,
    "protein_g": 11.4,
    "salt_g": 0.415,
    "sat_fat_g": 0.948,
    "sodium_mg": 166.0,
    "sugar_g": 1.23,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.7,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171980",
  "state": "Cooked",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "cooked",
    "finfish-and-shellfish-products",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
