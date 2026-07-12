/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Vegetables on a sandwich",
  "id": "usda-fndds-2710248",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    }
  ],
  "name": "Avocado, for use on a sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 8.53,
    "energy_kcal": 160.0,
    "fat_g": 14.7,
    "fibre_g": 6.7,
    "folate_ug": 81.0,
    "iron_mg": 0.55,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 485.0,
    "protein_g": 2.0,
    "salt_g": 0.0175,
    "sat_fat_g": 2.13,
    "sodium_mg": 7.0,
    "sugar_g": 0.66,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 2.07,
    "vitamin_k_ug": 21.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710248",
  "state": "Unspecified",
  "subcategory": "Vegetables on a sandwich",
  "tags": [
    "fruit",
    "unspecified",
    "vegetables-on-a-sandwich"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
