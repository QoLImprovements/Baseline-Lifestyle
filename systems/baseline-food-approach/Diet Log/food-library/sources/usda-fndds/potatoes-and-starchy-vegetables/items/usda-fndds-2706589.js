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
  "id": "usda-fndds-2706589",
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
  "name": "Corned beef, potatoes, and vegetables including carrots, broccoli, and/or dark-green leafy; no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 13.7,
    "energy_kcal": 127.0,
    "fat_g": 6.0,
    "fibre_g": 1.8,
    "folate_ug": 15.0,
    "iron_mg": 0.66,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 264.0,
    "protein_g": 4.76,
    "salt_g": 0.795,
    "sat_fat_g": 1.5,
    "sodium_mg": 318.0,
    "sugar_g": 1.21,
    "vitamin_a_ug": 108.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 16.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706589",
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
