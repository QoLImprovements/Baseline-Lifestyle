/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "stick-4-x-1-x-1-2",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-174195",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "stick-4-x-1-x-1-2",
      "kind": "unit",
      "label": "stick (4\" x 1\" x 1/2\")"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "piece-4-x-2-x-1-2",
      "kind": "unit",
      "label": "piece (4\" x 2\" x 1/2\")"
    }
  ],
  "name": "Fish, fish sticks, frozen, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 21.7,
    "energy_kcal": 277.0,
    "fat_g": 16.2,
    "fibre_g": 1.5,
    "folate_ug": 24.0,
    "iron_mg": 0.84,
    "magnesium_mg": 25.0,
    "omega3_g": 0.378,
    "phosphorus_mg": 191.0,
    "potassium_mg": 185.0,
    "protein_g": 11.0,
    "salt_g": 1.005,
    "sat_fat_g": 3.73,
    "sodium_mg": 402.0,
    "sugar_g": 1.65,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 6.88,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174195",
  "state": "Frozen",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "frozen"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
