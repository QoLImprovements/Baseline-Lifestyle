/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "cup-not-packed",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-174205",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "cup-not-packed",
      "kind": "unit",
      "label": "cup (not packed)"
    },
    {
      "gramsPerUnit": 118.0,
      "key": "cup-flaked-and-pieces",
      "kind": "unit",
      "label": "cup, flaked and pieces"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Crustaceans, crab, blue, cooked, moist heat",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 0.0,
    "energy_kcal": 347.0,
    "fat_g": 0.74,
    "fibre_g": 0.0,
    "folate_ug": 51.0,
    "iron_mg": 0.5,
    "magnesium_mg": 36.0,
    "omega3_g": 0.186,
    "phosphorus_mg": 234.0,
    "potassium_mg": 259.0,
    "protein_g": 17.9,
    "salt_g": 0.9875,
    "sat_fat_g": 0.201,
    "sodium_mg": 395.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 3.3,
    "vitamin_e_mg": 1.84,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174205",
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
