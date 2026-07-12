/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "guideline-amount-per-slice-of-bread-roll",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707587",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "guideline-amount-per-slice-of-bread-roll",
      "kind": "unit",
      "label": "Guideline amount per slice of bread/roll"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Tahini",
  "nutritionPerBasis": {
    "calcium_mg": 116.0,
    "carbs_g": 14.2,
    "energy_kcal": 697.0,
    "fat_g": 62.4,
    "fibre_g": 8.4,
    "folate_ug": 108.0,
    "iron_mg": 7.0,
    "magnesium_mg": 357.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 719.0,
    "potassium_mg": 408.0,
    "protein_g": 19.7,
    "salt_g": 0.16,
    "sat_fat_g": 8.97,
    "sodium_mg": 64.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707587",
  "state": "Unspecified",
  "subcategory": "Nuts and seeds",
  "tags": [
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
