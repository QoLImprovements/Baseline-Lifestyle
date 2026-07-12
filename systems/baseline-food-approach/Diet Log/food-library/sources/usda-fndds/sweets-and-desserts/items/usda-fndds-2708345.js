/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2708345",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz",
      "kind": "unit",
      "label": "1 oz"
    }
  ],
  "name": "Cake made with glutinous rice",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 53.6,
    "energy_kcal": 279.0,
    "fat_g": 6.51,
    "fibre_g": 0.7,
    "folate_ug": 5.0,
    "iron_mg": 0.52,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 85.0,
    "protein_g": 2.49,
    "salt_g": 0.09,
    "sat_fat_g": 5.48,
    "sodium_mg": 36.0,
    "sugar_g": 31.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708345",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "rice-mixed-dishes",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
