/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-oz-cooked",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706047",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-large-thigh",
      "kind": "unit",
      "label": "1 large thigh"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-medium-thigh",
      "kind": "unit",
      "label": "1 medium thigh"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-small-thigh",
      "kind": "unit",
      "label": "1 small thigh"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    }
  ],
  "name": "Chicken thigh, fried, coated, prepared skinless, coating eaten, from raw",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 5.96,
    "energy_kcal": 231.0,
    "fat_g": 13.5,
    "fibre_g": 0.2,
    "folate_ug": 16.0,
    "iron_mg": 1.33,
    "magnesium_mg": 21.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 190.0,
    "potassium_mg": 221.0,
    "protein_g": 20.1,
    "salt_g": 1.065,
    "sat_fat_g": 2.77,
    "sodium_mg": 426.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.47,
    "vitamin_k_ug": 10.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706047",
  "state": "Fried",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
