/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706758",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 121.0,
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
  "name": "Pork and vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 3.14,
    "energy_kcal": 123.0,
    "fat_g": 7.27,
    "fibre_g": 1.5,
    "folate_ug": 16.0,
    "iron_mg": 0.67,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 234.0,
    "protein_g": 11.2,
    "salt_g": 0.7925,
    "sat_fat_g": 1.78,
    "sodium_mg": 317.0,
    "sugar_g": 1.33,
    "vitamin_a_ug": 216.0,
    "vitamin_c_mg": 10.4,
    "vitamin_e_mg": 1.32,
    "vitamin_k_ug": 28.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706758",
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
