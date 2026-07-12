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
  "id": "usda-fndds-2710255",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    }
  ],
  "name": "Tomatoes, for use on a sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 4.04,
    "energy_kcal": 20.0,
    "fat_g": 0.31,
    "fibre_g": 1.2,
    "folate_ug": 13.0,
    "iron_mg": 0.22,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 226.0,
    "protein_g": 0.82,
    "salt_g": 0.01,
    "sat_fat_g": 0.028,
    "sodium_mg": 4.0,
    "sugar_g": 2.63,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 16.3,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710255",
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
