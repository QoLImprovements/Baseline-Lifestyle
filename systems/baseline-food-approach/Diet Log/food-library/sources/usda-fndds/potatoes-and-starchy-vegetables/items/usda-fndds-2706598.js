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
  "id": "usda-fndds-2706598",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef, potatoes, and vegetables excluding carrots, broccoli, and dark-green leafy; cream sauce, white sauce, or mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 12.2,
    "energy_kcal": 128.0,
    "fat_g": 6.69,
    "fibre_g": 1.3,
    "folate_ug": 10.0,
    "iron_mg": 0.57,
    "magnesium_mg": 16.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 62.0,
    "potassium_mg": 223.0,
    "protein_g": 5.33,
    "salt_g": 0.7575,
    "sat_fat_g": 1.31,
    "sodium_mg": 303.0,
    "sugar_g": 1.25,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 13.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706598",
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
