/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706637",
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
      "gramsPerUnit": 121.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pork, potatoes, and vegetables including carrots, broccoli, and/or dark-green leafy; no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 13.4,
    "energy_kcal": 128.0,
    "fat_g": 5.43,
    "fibre_g": 1.8,
    "folate_ug": 13.0,
    "iron_mg": 0.52,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 310.0,
    "protein_g": 6.55,
    "salt_g": 0.79,
    "sat_fat_g": 1.13,
    "sodium_mg": 316.0,
    "sugar_g": 1.19,
    "vitamin_a_ug": 107.0,
    "vitamin_c_mg": 9.5,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 17.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706637",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-mixed-dishes",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
