/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "guideline-amount-on-large-sandwich",
  "description": "Olives, pickles, pickled vegetables",
  "id": "usda-fndds-2710079",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-individual-packet",
      "kind": "unit",
      "label": "1 individual packet"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Relish, pickle",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 35.1,
    "energy_kcal": 130.0,
    "fat_g": 0.47,
    "fibre_g": 1.1,
    "folate_ug": 1.0,
    "iron_mg": 0.87,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 25.0,
    "protein_g": 0.37,
    "salt_g": 2.0275,
    "sat_fat_g": 0.054,
    "sodium_mg": 811.0,
    "sugar_g": 29.1,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 83.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710079",
  "state": "Unspecified",
  "subcategory": "Olives, pickles, pickled vegetables",
  "tags": [
    "condiments-and-sauces",
    "olives-pickles-pickled-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
