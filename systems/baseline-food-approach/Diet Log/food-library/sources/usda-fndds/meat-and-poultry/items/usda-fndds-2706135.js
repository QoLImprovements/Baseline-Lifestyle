/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-thin-slice-yield-after-cooking",
  "description": "Bacon",
  "id": "usda-fndds-2706135",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-thin-slice-yield-after-cooking",
      "kind": "unit",
      "label": "1 thin slice (yield after cooking)"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "1-slice-nfs",
      "kind": "unit",
      "label": "1 slice, NFS"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-thick-slice-yield-after-cooking",
      "kind": "unit",
      "label": "1 thick slice (yield after cooking)"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "1-cup-pieces",
      "kind": "unit",
      "label": "1 cup, pieces"
    },
    {
      "gramsPerUnit": 11.0,
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
      "key": "1-oz-raw-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz, raw (yield after cooking)"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "1-medium-slice-yield-after-cooking",
      "kind": "unit",
      "label": "1 medium slice (yield after cooking)"
    }
  ],
  "name": "Turkey bacon, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 163.0,
    "carbs_g": 4.24,
    "energy_kcal": 368.0,
    "fat_g": 25.9,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 2.63,
    "magnesium_mg": 30.0,
    "omega3_g": 0.053,
    "phosphorus_mg": 416.0,
    "potassium_mg": 666.0,
    "protein_g": 29.5,
    "salt_g": 5.05,
    "sat_fat_g": 6.93,
    "sodium_mg": 2020.0,
    "sugar_g": 4.24,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706135",
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
