/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-oz-raw-yield-after-cooking",
  "description": "Bacon",
  "id": "usda-fndds-2705886",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-oz-raw-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz, raw (yield after cooking)"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "1-thick-slice-yield-after-cooking",
      "kind": "unit",
      "label": "1 thick slice (yield after cooking)"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-medium-slice-yield-after-cooking",
      "kind": "unit",
      "label": "1 medium slice (yield after cooking)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-thin-slice-yield-after-cooking",
      "kind": "unit",
      "label": "1 thin slice (yield after cooking)"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-cup-pieces",
      "kind": "unit",
      "label": "1 cup, pieces"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "guideline-amount-if-topping",
      "kind": "unit",
      "label": "Guideline amount if topping"
    }
  ],
  "name": "Bacon, NS as to type of meat, reduced sodium, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 4.8,
    "energy_kcal": 253.0,
    "fat_g": 20.0,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.72,
    "magnesium_mg": 19.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 145.0,
    "potassium_mg": 156.0,
    "protein_g": 13.3,
    "salt_g": 2.25,
    "sat_fat_g": 6.67,
    "sodium_mg": 900.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 24.0,
    "vitamin_e_mg": 2.7,
    "vitamin_k_ug": 10.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705886",
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
