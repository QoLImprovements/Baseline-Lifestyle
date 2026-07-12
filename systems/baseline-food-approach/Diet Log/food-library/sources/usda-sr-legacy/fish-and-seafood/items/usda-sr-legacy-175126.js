/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "fillet",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-175126",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "fillet",
      "kind": "unit",
      "label": "fillet"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Fish, ocean perch, Atlantic, cooked, dry heat",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 0.0,
    "energy_kcal": 401.0,
    "fat_g": 1.87,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.27,
    "magnesium_mg": 27.0,
    "omega3_g": 0.273,
    "phosphorus_mg": 300.0,
    "potassium_mg": 226.0,
    "protein_g": 18.5,
    "salt_g": 0.8675,
    "sat_fat_g": 0.33,
    "sodium_mg": 347.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175126",
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
