/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "20-small",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-171975",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "20-small",
      "kind": "unit",
      "label": "20 small"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Mollusks, clam, mixed species, cooked, moist heat",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 5.13,
    "energy_kcal": 148.0,
    "fat_g": 1.95,
    "fibre_g": 0.0,
    "folate_ug": 29.0,
    "iron_mg": 2.81,
    "magnesium_mg": 18.0,
    "omega3_g": 0.388,
    "phosphorus_mg": 338.0,
    "potassium_mg": 628.0,
    "protein_g": 25.6,
    "salt_g": 3.0,
    "sat_fat_g": 0.188,
    "sodium_mg": 1200.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 171.0,
    "vitamin_c_mg": 22.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171975",
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
