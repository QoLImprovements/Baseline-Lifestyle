/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "cup",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-175140",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "sardine",
      "kind": "unit",
      "label": "sardine"
    },
    {
      "gramsPerUnit": 370.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    }
  ],
  "name": "Fish, sardine, Pacific, canned in tomato sauce, drained solids with bone",
  "nutritionPerBasis": {
    "calcium_mg": 240.0,
    "carbs_g": 0.54,
    "energy_kcal": 774.0,
    "fat_g": 10.4,
    "fibre_g": 0.1,
    "folate_ug": 24.0,
    "iron_mg": 2.3,
    "magnesium_mg": 34.0,
    "omega3_g": 1.457,
    "phosphorus_mg": 366.0,
    "potassium_mg": 341.0,
    "protein_g": 20.9,
    "salt_g": 1.035,
    "sat_fat_g": 2.68,
    "sodium_mg": 414.0,
    "sugar_g": 0.43,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.38,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175140",
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
