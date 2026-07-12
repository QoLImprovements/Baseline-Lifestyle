/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "0-5-fillet",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-175127",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "0-5-fillet",
      "kind": "unit",
      "label": "0.5 fillet"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Fish, pike, northern, cooked, dry heat",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 0.0,
    "energy_kcal": 473.0,
    "fat_g": 0.88,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 0.71,
    "magnesium_mg": 40.0,
    "omega3_g": 0.155,
    "phosphorus_mg": 282.0,
    "potassium_mg": 331.0,
    "protein_g": 24.7,
    "salt_g": 0.1225,
    "sat_fat_g": 0.151,
    "sodium_mg": 49.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175127",
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
