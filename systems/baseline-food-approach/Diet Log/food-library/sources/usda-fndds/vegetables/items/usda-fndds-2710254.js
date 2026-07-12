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
  "id": "usda-fndds-2710254",
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
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Spinach, for use on a sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 2.41,
    "energy_kcal": 27.0,
    "fat_g": 0.62,
    "fibre_g": 1.6,
    "folate_ug": 116.0,
    "iron_mg": 1.26,
    "magnesium_mg": 93.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 582.0,
    "protein_g": 2.85,
    "salt_g": 0.2775,
    "sat_fat_g": 0.063,
    "sodium_mg": 111.0,
    "sugar_g": 0.42,
    "vitamin_a_ug": 283.0,
    "vitamin_c_mg": 26.5,
    "vitamin_e_mg": 2.03,
    "vitamin_k_ug": 483.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710254",
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
