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
  "id": "usda-fndds-2707100",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 312.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 312.0,
      "key": "1-swanson-salisbury-steak-dinner-11-oz",
      "kind": "unit",
      "label": "1 Swanson Salisbury Steak Dinner (11 oz)"
    },
    {
      "gramsPerUnit": 319.0,
      "key": "1-morton-salisbury-steak-dinner-11-25-oz",
      "kind": "unit",
      "label": "1 Morton Salisbury Steak Dinner (11.25 oz)"
    }
  ],
  "name": "Salisbury steak with gravy, whipped potatoes, vegetable, dessert, frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 12.6,
    "energy_kcal": 141.0,
    "fat_g": 6.66,
    "fibre_g": 1.0,
    "folate_ug": 19.0,
    "iron_mg": 1.17,
    "magnesium_mg": 16.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 82.0,
    "potassium_mg": 190.0,
    "protein_g": 7.65,
    "salt_g": 1.4725,
    "sat_fat_g": 2.47,
    "sodium_mg": 589.0,
    "sugar_g": 2.23,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707100",
  "state": "Frozen",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "frozen",
    "meat-mixed-dishes",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
