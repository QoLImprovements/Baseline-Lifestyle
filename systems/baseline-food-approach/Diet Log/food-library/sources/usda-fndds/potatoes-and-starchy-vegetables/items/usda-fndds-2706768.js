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
  "id": "usda-fndds-2706768",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 122.0,
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
  "name": "Ham and vegetables excluding carrots, broccoli, and dark-green leafy; no potatoes, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 5.12,
    "energy_kcal": 120.0,
    "fat_g": 7.83,
    "fibre_g": 1.1,
    "folate_ug": 12.0,
    "iron_mg": 0.63,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 105.0,
    "potassium_mg": 200.0,
    "protein_g": 7.56,
    "salt_g": 1.8925,
    "sat_fat_g": 1.62,
    "sodium_mg": 757.0,
    "sugar_g": 0.98,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 12.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706768",
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
