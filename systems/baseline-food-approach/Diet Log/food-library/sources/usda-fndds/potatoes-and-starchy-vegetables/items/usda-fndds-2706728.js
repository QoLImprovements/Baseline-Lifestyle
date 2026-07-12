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
  "id": "usda-fndds-2706728",
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
  "name": "Beef and vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 3.0,
    "energy_kcal": 116.0,
    "fat_g": 6.73,
    "fibre_g": 1.4,
    "folate_ug": 19.0,
    "iron_mg": 1.14,
    "magnesium_mg": 13.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 85.0,
    "potassium_mg": 164.0,
    "protein_g": 11.4,
    "salt_g": 0.79,
    "sat_fat_g": 1.67,
    "sodium_mg": 316.0,
    "sugar_g": 1.27,
    "vitamin_a_ug": 206.0,
    "vitamin_c_mg": 9.7,
    "vitamin_e_mg": 1.34,
    "vitamin_k_ug": 27.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706728",
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
