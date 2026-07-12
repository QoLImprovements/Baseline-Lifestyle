/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "small-2-2-3-x-1-2-x-1-4",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-175139",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "small-2-2-3-x-1-2-x-1-4",
      "kind": "unit",
      "label": "small (2-2/3\" x 1/2\" x 1/4\")"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "can-3-75-oz",
      "kind": "unit",
      "label": "can (3.75 oz)"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "cup-drained",
      "kind": "unit",
      "label": "cup, drained"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "2-sardines",
      "kind": "unit",
      "label": "2 sardines"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Fish, sardine, Atlantic, canned in oil, drained solids with bone",
  "nutritionPerBasis": {
    "calcium_mg": 382.0,
    "carbs_g": 0.0,
    "energy_kcal": 871.0,
    "fat_g": 11.4,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 2.92,
    "magnesium_mg": 39.0,
    "omega3_g": 0.982,
    "phosphorus_mg": 490.0,
    "potassium_mg": 397.0,
    "protein_g": 24.6,
    "salt_g": 0.7675,
    "sat_fat_g": 1.53,
    "sodium_mg": 307.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.04,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175139",
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
