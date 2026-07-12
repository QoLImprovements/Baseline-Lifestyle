/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "guideline-amount-on-regular-sandwich",
  "description": "Vegetables on a sandwich",
  "id": "usda-fndds-2710252",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Onions, for use on a sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 8.46,
    "energy_kcal": 38.0,
    "fat_g": 0.08,
    "fibre_g": 1.7,
    "folate_ug": 19.0,
    "iron_mg": 0.24,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 171.0,
    "protein_g": 0.86,
    "salt_g": 0.0025,
    "sat_fat_g": 0.042,
    "sodium_mg": 1.0,
    "sugar_g": 5.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.2,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710252",
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
