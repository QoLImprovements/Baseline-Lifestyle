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
  "id": "usda-fndds-2706792",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken or turkey and vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 4.42,
    "energy_kcal": 113.0,
    "fat_g": 7.8,
    "fibre_g": 1.6,
    "folate_ug": 17.0,
    "iron_mg": 0.79,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 79.0,
    "potassium_mg": 250.0,
    "protein_g": 7.23,
    "salt_g": 0.9125,
    "sat_fat_g": 1.22,
    "sodium_mg": 365.0,
    "sugar_g": 2.47,
    "vitamin_a_ug": 149.0,
    "vitamin_c_mg": 9.7,
    "vitamin_e_mg": 2.26,
    "vitamin_k_ug": 22.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706792",
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
