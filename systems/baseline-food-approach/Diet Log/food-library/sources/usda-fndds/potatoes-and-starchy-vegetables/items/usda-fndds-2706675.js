/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706675",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken or turkey, potatoes, and vegetables including carrots, broccoli, and/or dark-green leafy; tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 11.1,
    "energy_kcal": 124.0,
    "fat_g": 7.02,
    "fibre_g": 1.7,
    "folate_ug": 13.0,
    "iron_mg": 0.58,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 282.0,
    "protein_g": 4.81,
    "salt_g": 0.8525,
    "sat_fat_g": 1.04,
    "sodium_mg": 341.0,
    "sugar_g": 1.78,
    "vitamin_a_ug": 84.0,
    "vitamin_c_mg": 8.6,
    "vitamin_e_mg": 1.77,
    "vitamin_k_ug": 16.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706675",
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
