/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup-cooked-diced",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706032",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-medium-thigh",
      "kind": "unit",
      "label": "1 medium thigh"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-small-thigh",
      "kind": "unit",
      "label": "1 small thigh"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-large-thigh",
      "kind": "unit",
      "label": "1 large thigh"
    }
  ],
  "name": "Chicken thigh, baked or broiled, skin not eaten, from pre-cooked",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 193.0,
    "fat_g": 10.7,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.97,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 216.0,
    "potassium_mg": 262.0,
    "protein_g": 24.1,
    "salt_g": 0.8375,
    "sat_fat_g": 2.78,
    "sodium_mg": 335.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706032",
  "state": "Baked",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "baked",
    "chicken-whole-pieces",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
