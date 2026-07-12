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
  "id": "usda-fndds-2706046",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
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
      "gramsPerUnit": 65.0,
      "key": "1-small-thigh",
      "kind": "unit",
      "label": "1 small thigh"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-medium-thigh",
      "kind": "unit",
      "label": "1 medium thigh"
    }
  ],
  "name": "Chicken thigh, fried, coated, skin / coating not eaten, from raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 192.0,
    "fat_g": 9.93,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.1,
    "magnesium_mg": 23.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 224.0,
    "potassium_mg": 262.0,
    "protein_g": 24.1,
    "salt_g": 0.835,
    "sat_fat_g": 2.52,
    "sodium_mg": 334.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706046",
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
