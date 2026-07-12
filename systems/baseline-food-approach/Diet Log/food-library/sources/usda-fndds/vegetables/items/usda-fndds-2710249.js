/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "guideline-amount-on-large-sandwich",
  "description": "Vegetables on a sandwich",
  "id": "usda-fndds-2710249",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    }
  ],
  "name": "Cucumber, for use on a sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 2.95,
    "energy_kcal": 16.0,
    "fat_g": 0.18,
    "fibre_g": 0.5,
    "folate_ug": 7.0,
    "iron_mg": 0.0,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 170.0,
    "protein_g": 0.62,
    "salt_g": 0.005,
    "sat_fat_g": 0.037,
    "sodium_mg": 2.0,
    "sugar_g": 1.67,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 24.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710249",
  "state": "Unspecified",
  "subcategory": "Vegetables on a sandwich",
  "tags": [
    "unspecified",
    "vegetables",
    "vegetables-on-a-sandwich"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
