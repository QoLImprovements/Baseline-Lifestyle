/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "guideline-amount-on-regular-sandwich",
  "description": "Mustard and other condiments",
  "id": "usda-fndds-2710174",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "1-packet",
      "kind": "unit",
      "label": "1 packet"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Horseradish sauce",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 10.0,
    "energy_kcal": 503.0,
    "fat_g": 50.9,
    "fibre_g": 1.0,
    "folate_ug": 1.0,
    "iron_mg": 0.23,
    "magnesium_mg": 6.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 19.0,
    "potassium_mg": 44.0,
    "protein_g": 1.09,
    "salt_g": 1.825,
    "sat_fat_g": 8.23,
    "sodium_mg": 730.0,
    "sugar_g": 8.98,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 4.19,
    "vitamin_k_ug": 91.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710174",
  "state": "Unspecified",
  "subcategory": "Mustard and other condiments",
  "tags": [
    "condiments-and-sauces",
    "mustard-and-other-condiments",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
