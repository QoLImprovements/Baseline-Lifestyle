/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-shishkabob",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706855",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "1-shishkabob",
      "kind": "unit",
      "label": "1 shishkabob"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Shrimp shish kabob with vegetables, excluding potatoes",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 5.74,
    "energy_kcal": 83.0,
    "fat_g": 1.59,
    "fibre_g": 0.8,
    "folate_ug": 23.0,
    "iron_mg": 0.32,
    "magnesium_mg": 24.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 164.0,
    "potassium_mg": 201.0,
    "protein_g": 11.2,
    "salt_g": 0.6,
    "sat_fat_g": 0.352,
    "sodium_mg": 240.0,
    "sugar_g": 2.37,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 1.25,
    "vitamin_k_ug": 5.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706855",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
