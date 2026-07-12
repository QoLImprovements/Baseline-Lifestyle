/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-tablespoon",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707538",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "guideline-amount-per-slice-of-bread-roll",
      "kind": "unit",
      "label": "Guideline amount per slice of bread/roll"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-single-serving",
      "kind": "unit",
      "label": "1 single serving"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "guideline-amount-per-sandwich",
      "kind": "unit",
      "label": "Guideline amount per sandwich"
    }
  ],
  "name": "Peanut butter, lower sodium",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 22.3,
    "energy_kcal": 598.0,
    "fat_g": 51.4,
    "fibre_g": 5.0,
    "folate_ug": 87.0,
    "iron_mg": 1.74,
    "magnesium_mg": 168.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 335.0,
    "potassium_mg": 558.0,
    "protein_g": 22.2,
    "salt_g": 0.0425,
    "sat_fat_g": 10.3,
    "sodium_mg": 17.0,
    "sugar_g": 10.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 9.1,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707538",
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
