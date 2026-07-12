/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "guideline-amount-on-large-sandwich",
  "description": "Mayonnaise",
  "id": "usda-fndds-2710204",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "1-packet",
      "kind": "unit",
      "label": "1 packet"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 13.8,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "guideline-amount-in-salad",
      "kind": "unit",
      "label": "Guideline amount in salad"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-dipping-size-container",
      "kind": "unit",
      "label": "1 dipping-size container"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    }
  ],
  "name": "Mayonnaise, regular",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.57,
    "energy_kcal": 680.0,
    "fat_g": 74.8,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.21,
    "magnesium_mg": 1.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 21.0,
    "potassium_mg": 20.0,
    "protein_g": 0.96,
    "salt_g": 1.5875,
    "sat_fat_g": 11.7,
    "sodium_mg": 635.0,
    "sugar_g": 0.57,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.28,
    "vitamin_k_ug": 163.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710204",
  "state": "Unspecified",
  "subcategory": "Mayonnaise",
  "tags": [
    "condiments-and-sauces",
    "mayonnaise",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
