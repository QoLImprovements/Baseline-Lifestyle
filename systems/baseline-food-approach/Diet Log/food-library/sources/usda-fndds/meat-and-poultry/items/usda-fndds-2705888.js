/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Bacon",
  "id": "usda-fndds-2705888",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-thin-slice-yield-after-cooking",
      "kind": "unit",
      "label": "1 thin slice (yield after cooking)"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-medium-slice-yield-after-cooking",
      "kind": "unit",
      "label": "1 medium slice (yield after cooking)"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-oz-raw-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz, raw (yield after cooking)"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "1-thick-slice-yield-after-cooking",
      "kind": "unit",
      "label": "1 thick slice (yield after cooking)"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "guideline-amount-if-topping",
      "kind": "unit",
      "label": "Guideline amount if topping"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-cup-pieces",
      "kind": "unit",
      "label": "1 cup, pieces"
    }
  ],
  "name": "Pork bacon, NS as to fresh, smoked or cured, reduced sodium, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 1.43,
    "energy_kcal": 541.0,
    "fat_g": 41.8,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.44,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 533.0,
    "potassium_mg": 565.0,
    "protein_g": 37.0,
    "salt_g": 2.575,
    "sat_fat_g": 13.7,
    "sodium_mg": 1030.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705888",
  "state": "Cooked",
  "subcategory": "Bacon",
  "tags": [
    "bacon",
    "cooked",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
