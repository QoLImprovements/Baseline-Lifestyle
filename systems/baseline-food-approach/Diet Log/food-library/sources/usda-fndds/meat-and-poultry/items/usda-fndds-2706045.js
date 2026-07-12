/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-large-thigh",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706045",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-large-thigh",
      "kind": "unit",
      "label": "1 large thigh"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-medium-thigh",
      "kind": "unit",
      "label": "1 medium thigh"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-small-thigh",
      "kind": "unit",
      "label": "1 small thigh"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken thigh, fried, coated, skin / coating eaten, from raw",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 5.98,
    "energy_kcal": 273.0,
    "fat_g": 18.6,
    "fibre_g": 0.2,
    "folate_ug": 15.0,
    "iron_mg": 1.3,
    "magnesium_mg": 20.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 179.0,
    "potassium_mg": 209.0,
    "protein_g": 19.0,
    "salt_g": 0.865,
    "sat_fat_g": 4.17,
    "sodium_mg": 346.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.48,
    "vitamin_k_ug": 9.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706045",
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
