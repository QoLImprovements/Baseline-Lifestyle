/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "3-oz",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-175173",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 59.0,
      "key": "6-medium",
      "kind": "unit",
      "label": "6 medium"
    }
  ],
  "name": "Mollusks, oyster, eastern, farmed, cooked, dry heat",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 7.28,
    "energy_kcal": 331.0,
    "fat_g": 2.12,
    "fibre_g": 0.0,
    "folate_ug": 24.0,
    "iron_mg": 7.77,
    "magnesium_mg": 33.0,
    "omega3_g": 0.44,
    "phosphorus_mg": 115.0,
    "potassium_mg": 152.0,
    "protein_g": 7.0,
    "salt_g": 0.4075,
    "sat_fat_g": 0.683,
    "sodium_mg": 163.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175173",
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
