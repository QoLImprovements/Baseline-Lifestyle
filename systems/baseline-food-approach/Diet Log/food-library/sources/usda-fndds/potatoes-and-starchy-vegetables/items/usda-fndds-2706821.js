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
  "id": "usda-fndds-2706821",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey and vegetables excluding carrots, broccoli, and dark-green leafy; no potatoes, cheese sauce",
  "nutritionPerBasis": {
    "calcium_mg": 132.0,
    "carbs_g": 5.54,
    "energy_kcal": 124.0,
    "fat_g": 7.24,
    "fibre_g": 0.7,
    "folate_ug": 13.0,
    "iron_mg": 0.43,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 151.0,
    "potassium_mg": 162.0,
    "protein_g": 9.87,
    "salt_g": 0.9125,
    "sat_fat_g": 3.49,
    "sodium_mg": 365.0,
    "sugar_g": 0.72,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706821",
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
