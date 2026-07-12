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
  "id": "usda-fndds-2706781",
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
  "name": "Chicken or turkey and vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 2.88,
    "energy_kcal": 118.0,
    "fat_g": 7.78,
    "fibre_g": 1.4,
    "folate_ug": 18.0,
    "iron_mg": 0.5,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 96.0,
    "potassium_mg": 166.0,
    "protein_g": 9.66,
    "salt_g": 0.965,
    "sat_fat_g": 1.29,
    "sodium_mg": 386.0,
    "sugar_g": 1.22,
    "vitamin_a_ug": 200.0,
    "vitamin_c_mg": 9.3,
    "vitamin_e_mg": 1.7,
    "vitamin_k_ug": 27.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706781",
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
