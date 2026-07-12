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
  "id": "usda-fndds-2706503",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 212.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 159.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef stew with potatoes, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 6.53,
    "energy_kcal": 220.0,
    "fat_g": 14.8,
    "fibre_g": 1.0,
    "folate_ug": 10.0,
    "iron_mg": 1.74,
    "magnesium_mg": 25.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 156.0,
    "potassium_mg": 403.0,
    "protein_g": 14.6,
    "salt_g": 1.43,
    "sat_fat_g": 4.21,
    "sodium_mg": 572.0,
    "sugar_g": 0.93,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 9.2,
    "vitamin_e_mg": 1.53,
    "vitamin_k_ug": 8.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706503",
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
