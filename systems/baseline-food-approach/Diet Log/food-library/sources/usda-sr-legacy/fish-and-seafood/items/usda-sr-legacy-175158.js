/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "can",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-175158",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 172.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Fish, tuna, white, canned in water, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 536.0,
    "fat_g": 2.97,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.97,
    "magnesium_mg": 33.0,
    "omega3_g": 0.88,
    "phosphorus_mg": 217.0,
    "potassium_mg": 237.0,
    "protein_g": 23.6,
    "salt_g": 0.9425,
    "sat_fat_g": 0.792,
    "sodium_mg": 377.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175158",
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
