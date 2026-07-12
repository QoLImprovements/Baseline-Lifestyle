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
  "id": "usda-fndds-2706782",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey and vegetables excluding carrots, broccoli, and dark-green leafy; no potatoes, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 5.08,
    "energy_kcal": 123.0,
    "fat_g": 7.96,
    "fibre_g": 1.1,
    "folate_ug": 14.0,
    "iron_mg": 0.45,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 160.0,
    "protein_g": 8.72,
    "salt_g": 0.9475,
    "sat_fat_g": 1.29,
    "sodium_mg": 379.0,
    "sugar_g": 0.98,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 1.27,
    "vitamin_k_ug": 13.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706782",
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
