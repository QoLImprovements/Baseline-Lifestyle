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
  "id": "usda-fndds-2706474",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef and potatoes, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 14.5,
    "energy_kcal": 133.0,
    "fat_g": 4.93,
    "fibre_g": 1.3,
    "folate_ug": 9.0,
    "iron_mg": 0.78,
    "magnesium_mg": 19.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 71.0,
    "potassium_mg": 293.0,
    "protein_g": 7.92,
    "salt_g": 0.7625,
    "sat_fat_g": 1.15,
    "sodium_mg": 305.0,
    "sugar_g": 0.65,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.4,
    "vitamin_e_mg": 0.65,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706474",
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
