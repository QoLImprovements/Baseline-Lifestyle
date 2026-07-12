/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Mustard and other condiments",
  "id": "usda-fndds-2710093",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 0.8,
      "key": "10-drops",
      "kind": "unit",
      "label": "10 drops"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-packet",
      "kind": "unit",
      "label": "1 packet"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "guideline-amount-per-sandwich",
      "kind": "unit",
      "label": "Guideline amount per sandwich"
    }
  ],
  "name": "Hot pepper sauce",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.8,
    "energy_kcal": 12.0,
    "fat_g": 0.76,
    "fibre_g": 0.6,
    "folate_ug": 1.0,
    "iron_mg": 1.16,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 128.0,
    "protein_g": 1.29,
    "salt_g": 1.5825,
    "sat_fat_g": 0.106,
    "sodium_mg": 633.0,
    "sugar_g": 0.13,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710093",
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
