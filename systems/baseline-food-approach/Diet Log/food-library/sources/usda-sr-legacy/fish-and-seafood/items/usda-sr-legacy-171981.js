/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "cup-undrained",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-171981",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "cup-undrained",
      "kind": "unit",
      "label": "cup, undrained"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "oyster",
      "kind": "unit",
      "label": "oyster"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "oz-drained",
      "kind": "unit",
      "label": "oz, drained"
    },
    {
      "gramsPerUnit": 272.0,
      "key": "can-12-oz-oysters-and-liquid",
      "kind": "unit",
      "label": "can (12 oz), oysters and liquid"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "cup-drained",
      "kind": "unit",
      "label": "cup, drained"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Mollusks, oyster, eastern, canned",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 3.91,
    "energy_kcal": 287.0,
    "fat_g": 2.47,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 6.7,
    "magnesium_mg": 54.0,
    "omega3_g": 0.489,
    "phosphorus_mg": 139.0,
    "potassium_mg": 229.0,
    "protein_g": 7.06,
    "salt_g": 0.28,
    "sat_fat_g": 0.631,
    "sodium_mg": 112.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171981",
  "state": "Canned",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "canned",
    "finfish-and-shellfish-products",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
