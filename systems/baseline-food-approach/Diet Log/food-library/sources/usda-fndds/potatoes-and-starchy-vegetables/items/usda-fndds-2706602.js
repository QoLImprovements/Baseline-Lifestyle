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
  "id": "usda-fndds-2706602",
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
  "name": "Beef, potatoes, and vegetables excluding carrots, broccoli, and dark-green leafy; cheese sauce",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 13.0,
    "energy_kcal": 131.0,
    "fat_g": 5.43,
    "fibre_g": 1.3,
    "folate_ug": 13.0,
    "iron_mg": 0.69,
    "magnesium_mg": 21.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 117.0,
    "potassium_mg": 259.0,
    "protein_g": 8.17,
    "salt_g": 0.7625,
    "sat_fat_g": 2.69,
    "sodium_mg": 305.0,
    "sugar_g": 0.91,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 5.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706602",
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
