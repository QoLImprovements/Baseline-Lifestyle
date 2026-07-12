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
  "id": "usda-fndds-2706772",
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
      "gramsPerUnit": 187.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pork and vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 4.48,
    "energy_kcal": 111.0,
    "fat_g": 7.13,
    "fibre_g": 1.7,
    "folate_ug": 15.0,
    "iron_mg": 0.88,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 288.0,
    "protein_g": 7.76,
    "salt_g": 0.76,
    "sat_fat_g": 1.47,
    "sodium_mg": 304.0,
    "sugar_g": 2.51,
    "vitamin_a_ug": 149.0,
    "vitamin_c_mg": 9.9,
    "vitamin_e_mg": 1.96,
    "vitamin_k_ug": 21.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706772",
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
