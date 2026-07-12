/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-oz-cooked",
  "description": "Bacon",
  "id": "usda-fndds-2705856",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-oz-raw-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz, raw (yield after cooking)"
    },
    {
      "gramsPerUnit": 13.0,
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
      "gramsPerUnit": 8.0,
      "key": "guideline-amount-if-topping",
      "kind": "unit",
      "label": "Guideline amount if topping"
    },
    {
      "gramsPerUnit": 6.5,
      "key": "1-slice-cooked-approx-8-oz-raw",
      "kind": "unit",
      "label": "1 slice, cooked (approx .8 oz, raw)"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "1-cup-pieces",
      "kind": "unit",
      "label": "1 cup, pieces"
    }
  ],
  "name": "Beef, bacon, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 1.4,
    "energy_kcal": 449.0,
    "fat_g": 34.4,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 3.14,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 236.0,
    "potassium_mg": 412.0,
    "protein_g": 31.3,
    "salt_g": 3.75,
    "sat_fat_g": 14.4,
    "sodium_mg": 1500.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705856",
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
