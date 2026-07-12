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
  "id": "usda-sr-legacy-171971",
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
      "gramsPerUnit": 22.0,
      "key": "4-large",
      "kind": "unit",
      "label": "4 large"
    }
  ],
  "name": "Crustaceans, shrimp, mixed species, cooked, moist heat (may contain additives to retain moisture)",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 1.52,
    "energy_kcal": 497.0,
    "fat_g": 1.7,
    "fibre_g": 0.0,
    "folate_ug": 24.0,
    "iron_mg": 0.32,
    "magnesium_mg": 37.0,
    "omega3_g": 0.288,
    "phosphorus_mg": 306.0,
    "potassium_mg": 170.0,
    "protein_g": 22.8,
    "salt_g": 2.3675,
    "sat_fat_g": 0.521,
    "sodium_mg": 947.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.2,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171971",
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
