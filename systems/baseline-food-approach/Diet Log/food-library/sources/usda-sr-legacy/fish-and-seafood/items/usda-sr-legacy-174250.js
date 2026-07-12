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
  "id": "usda-sr-legacy-174250",
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
      "gramsPerUnit": 25.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    }
  ],
  "name": "Mollusks, oyster, Pacific, cooked, moist heat",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 9.9,
    "energy_kcal": 682.0,
    "fat_g": 4.6,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 9.2,
    "magnesium_mg": 44.0,
    "omega3_g": 1.416,
    "phosphorus_mg": 243.0,
    "potassium_mg": 302.0,
    "protein_g": 18.9,
    "salt_g": 0.53,
    "sat_fat_g": 1.02,
    "sodium_mg": 212.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 146.0,
    "vitamin_c_mg": 12.8,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174250",
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
