/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "quantity-not-specified",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707543",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "guideline-amount-per-sandwich",
      "kind": "unit",
      "label": "Guideline amount per sandwich"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "guideline-amount-per-slice-of-bread-roll",
      "kind": "unit",
      "label": "Guideline amount per slice of bread/roll"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Peanut butter and jelly",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 46.1,
    "energy_kcal": 432.0,
    "fat_g": 25.7,
    "fibre_g": 3.0,
    "folate_ug": 44.0,
    "iron_mg": 0.96,
    "magnesium_mg": 87.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 306.0,
    "protein_g": 11.2,
    "salt_g": 0.57,
    "sat_fat_g": 5.16,
    "sodium_mg": 228.0,
    "sugar_g": 30.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 4.55,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707543",
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
