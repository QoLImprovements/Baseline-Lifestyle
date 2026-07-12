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
  "id": "usda-fndds-2706667",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken or turkey, potatoes, and vegetables including carrots, broccoli, and/or dark-green leafy; no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 13.3,
    "energy_kcal": 129.0,
    "fat_g": 5.97,
    "fibre_g": 1.8,
    "folate_ug": 15.0,
    "iron_mg": 0.45,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.0,
    "potassium_mg": 281.0,
    "protein_g": 6.16,
    "salt_g": 0.8625,
    "sat_fat_g": 0.938,
    "sodium_mg": 345.0,
    "sugar_g": 1.18,
    "vitamin_a_ug": 107.0,
    "vitamin_c_mg": 9.3,
    "vitamin_e_mg": 1.25,
    "vitamin_k_ug": 18.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706667",
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
