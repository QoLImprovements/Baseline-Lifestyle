/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-individual-container",
  "description": "Margarine",
  "id": "usda-fndds-2710162",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-pat",
      "kind": "unit",
      "label": "1 pat"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "guideline-amount-per-slice-of-bread-roll",
      "kind": "unit",
      "label": "Guideline amount per slice of bread/roll"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Margarine, light",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 1.22,
    "energy_kcal": 346.0,
    "fat_g": 37.9,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.03,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 45.0,
    "protein_g": 0.33,
    "salt_g": 1.465,
    "sat_fat_g": 8.65,
    "sodium_mg": 586.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1330.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 13.4,
    "vitamin_k_ug": 74.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710162",
  "state": "Unspecified",
  "subcategory": "Margarine",
  "tags": [
    "margarine",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
