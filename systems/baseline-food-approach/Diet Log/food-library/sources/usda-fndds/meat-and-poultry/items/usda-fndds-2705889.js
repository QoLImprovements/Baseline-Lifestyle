/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-thick-slice-yield-after-cooking",
  "description": "Bacon",
  "id": "usda-fndds-2705889",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "1-thick-slice-yield-after-cooking",
      "kind": "unit",
      "label": "1 thick slice (yield after cooking)"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-oz-raw-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz, raw (yield after cooking)"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-medium-slice-yield-after-cooking",
      "kind": "unit",
      "label": "1 medium slice (yield after cooking)"
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
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pork bacon, smoked or cured, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 1.7,
    "energy_kcal": 468.0,
    "fat_g": 35.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.95,
    "magnesium_mg": 31.0,
    "omega3_g": 0.038,
    "phosphorus_mg": 388.0,
    "potassium_mg": 499.0,
    "protein_g": 33.9,
    "salt_g": 4.2,
    "sat_fat_g": 12.0,
    "sodium_mg": 1680.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705889",
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
