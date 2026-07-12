/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "cake",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-171967",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "cake",
      "kind": "unit",
      "label": "cake"
    }
  ],
  "name": "Crustaceans, crab, blue, crab cakes, home recipe",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 0.48,
    "energy_kcal": 649.0,
    "fat_g": 7.52,
    "fibre_g": 0.0,
    "folate_ug": 53.0,
    "iron_mg": 1.08,
    "magnesium_mg": 33.0,
    "omega3_g": 0.493,
    "phosphorus_mg": 213.0,
    "potassium_mg": 324.0,
    "protein_g": 20.2,
    "salt_g": 0.825,
    "sat_fat_g": 1.48,
    "sodium_mg": 330.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171967",
  "state": "Unspecified",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
