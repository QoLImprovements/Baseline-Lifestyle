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
  "id": "usda-sr-legacy-171993",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 154.0,
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
  "name": "Fish, drum, freshwater, cooked, dry heat",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 0.0,
    "energy_kcal": 640.0,
    "fat_g": 6.32,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 1.15,
    "magnesium_mg": 38.0,
    "omega3_g": 0.848,
    "phosphorus_mg": 231.0,
    "potassium_mg": 353.0,
    "protein_g": 22.5,
    "salt_g": 0.24,
    "sat_fat_g": 1.43,
    "sodium_mg": 96.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171993",
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
