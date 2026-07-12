/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "filet",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-175181",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "filet",
      "kind": "unit",
      "label": "filet"
    },
    {
      "gramsPerUnit": 332.0,
      "key": "fish",
      "kind": "unit",
      "label": "fish"
    }
  ],
  "name": "Fish, trout, brook, raw, New York State",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 0.0,
    "energy_kcal": 458.0,
    "fat_g": 2.73,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.38,
    "magnesium_mg": 28.0,
    "omega3_g": 0.403,
    "phosphorus_mg": 246.0,
    "potassium_mg": 417.0,
    "protein_g": 21.2,
    "salt_g": 0.1125,
    "sat_fat_g": 0.595,
    "sodium_mg": 45.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175181",
  "state": "Raw",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
