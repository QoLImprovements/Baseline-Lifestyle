/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "guideline-amount-on-large-sandwich",
  "description": "Vegetables on a sandwich",
  "id": "usda-fndds-2710251",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    }
  ],
  "name": "Mushrooms, for use on a sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 4.13,
    "energy_kcal": 31.0,
    "fat_g": 0.35,
    "fibre_g": 1.7,
    "folate_ug": 35.0,
    "iron_mg": 0.23,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 371.0,
    "protein_g": 2.9,
    "salt_g": 0.015,
    "sat_fat_g": 0.05,
    "sodium_mg": 6.0,
    "sugar_g": 1.98,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710251",
  "state": "Unspecified",
  "subcategory": "Vegetables on a sandwich",
  "tags": [
    "prepared-meals-and-mixed-dishes",
    "unspecified",
    "vegetables-on-a-sandwich"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
