/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706671",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey, potatoes, and vegetables including carrots, broccoli, and/or dark-green leafy; cream sauce, white sauce, or mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 11.1,
    "energy_kcal": 126.0,
    "fat_g": 7.12,
    "fibre_g": 1.4,
    "folate_ug": 11.0,
    "iron_mg": 0.35,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 65.0,
    "potassium_mg": 220.0,
    "protein_g": 4.79,
    "salt_g": 0.855,
    "sat_fat_g": 1.18,
    "sodium_mg": 342.0,
    "sugar_g": 1.29,
    "vitamin_a_ug": 78.0,
    "vitamin_c_mg": 6.4,
    "vitamin_e_mg": 1.28,
    "vitamin_k_ug": 18.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706671",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
