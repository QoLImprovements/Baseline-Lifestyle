/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "cubic-inch-boneless",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-174194",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "cubic-inch-boneless",
      "kind": "unit",
      "label": "cubic inch, boneless"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-boneless",
      "kind": "unit",
      "label": "oz, boneless"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "oz-with-bone-yield-after-bone-removed",
      "kind": "unit",
      "label": "oz with bone (yield after bone removed)"
    },
    {
      "gramsPerUnit": 159.0,
      "key": "fillet",
      "kind": "unit",
      "label": "fillet"
    }
  ],
  "name": "Fish, eel, mixed species, cooked, dry heat",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 0.0,
    "energy_kcal": 987.0,
    "fat_g": 15.0,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 0.64,
    "magnesium_mg": 26.0,
    "omega3_g": 0.284,
    "phosphorus_mg": 277.0,
    "potassium_mg": 349.0,
    "protein_g": 23.6,
    "salt_g": 0.1625,
    "sat_fat_g": 3.02,
    "sodium_mg": 65.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1140.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174194",
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
