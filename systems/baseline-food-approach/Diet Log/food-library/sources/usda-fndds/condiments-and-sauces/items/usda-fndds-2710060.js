/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2710060",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 233.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Squash, summer, casserole, with rice and tomato sauce",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 14.9,
    "energy_kcal": 83.0,
    "fat_g": 1.66,
    "fibre_g": 1.1,
    "folate_ug": 35.0,
    "iron_mg": 0.97,
    "magnesium_mg": 19.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 46.0,
    "potassium_mg": 203.0,
    "protein_g": 2.32,
    "salt_g": 0.3,
    "sat_fat_g": 0.749,
    "sodium_mg": 120.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 10.4,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710060",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "vegetable-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
