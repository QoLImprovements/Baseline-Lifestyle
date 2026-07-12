/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "2-large",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-174221",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "2-large",
      "kind": "unit",
      "label": "2 large"
    }
  ],
  "name": "Mollusks, scallop, mixed species, cooked, breaded and fried",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 10.1,
    "energy_kcal": 216.0,
    "fat_g": 10.9,
    "fibre_g": 0.0,
    "folate_ug": 37.0,
    "iron_mg": 0.82,
    "magnesium_mg": 59.0,
    "omega3_g": 0.205,
    "phosphorus_mg": 236.0,
    "potassium_mg": 333.0,
    "protein_g": 18.1,
    "salt_g": 1.16,
    "sat_fat_g": 2.67,
    "sodium_mg": 464.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174221",
  "state": "Fried",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "fried"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
