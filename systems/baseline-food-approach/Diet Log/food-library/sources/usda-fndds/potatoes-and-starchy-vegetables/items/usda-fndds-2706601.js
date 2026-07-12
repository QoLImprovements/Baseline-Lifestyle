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
  "id": "usda-fndds-2706601",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Beef, potatoes, and vegetables including carrots, broccoli, and/or dark-green leafy; cheese sauce",
  "nutritionPerBasis": {
    "calcium_mg": 96.0,
    "carbs_g": 11.8,
    "energy_kcal": 127.0,
    "fat_g": 5.43,
    "fibre_g": 1.4,
    "folate_ug": 14.0,
    "iron_mg": 0.69,
    "magnesium_mg": 19.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 115.0,
    "potassium_mg": 253.0,
    "protein_g": 8.14,
    "salt_g": 0.76,
    "sat_fat_g": 2.69,
    "sodium_mg": 304.0,
    "sugar_g": 0.96,
    "vitamin_a_ug": 104.0,
    "vitamin_c_mg": 7.4,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 10.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706601",
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
