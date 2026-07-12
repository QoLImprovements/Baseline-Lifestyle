/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "guideline-amount-per-sandwich",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707541",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "guideline-amount-per-sandwich",
      "kind": "unit",
      "label": "Guideline amount per sandwich"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
    }
  ],
  "name": "Peanut butter, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 35.6,
    "energy_kcal": 520.0,
    "fat_g": 34.0,
    "fibre_g": 5.2,
    "folate_ug": 60.0,
    "iron_mg": 1.9,
    "magnesium_mg": 170.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 369.0,
    "potassium_mg": 669.0,
    "protein_g": 25.9,
    "salt_g": 1.35,
    "sat_fat_g": 5.76,
    "sodium_mg": 540.0,
    "sugar_g": 9.28,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 9.04,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707541",
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
