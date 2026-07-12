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
  "id": "usda-fndds-2710250",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    }
  ],
  "name": "Lettuce, for use on a sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 3.69,
    "energy_kcal": 20.0,
    "fat_g": 0.1,
    "fibre_g": 1.3,
    "folate_ug": 38.0,
    "iron_mg": 0.26,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 249.0,
    "protein_g": 0.92,
    "salt_g": 0.0575,
    "sat_fat_g": 0.026,
    "sodium_mg": 23.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 302.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 73.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710250",
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
