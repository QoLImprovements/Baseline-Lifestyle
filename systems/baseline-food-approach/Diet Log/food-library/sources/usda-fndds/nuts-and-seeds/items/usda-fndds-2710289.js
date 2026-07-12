/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "quantity-not-specified",
  "description": "Jams, syrups, toppings",
  "id": "usda-fndds-2710289",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "guideline-amount-per-sandwich",
      "kind": "unit",
      "label": "Guideline amount per sandwich"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "guideline-amount-per-slice-of-bread-roll",
      "kind": "unit",
      "label": "Guideline amount per slice of bread/roll"
    }
  ],
  "name": "Chocolate hazelnut spread",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 62.4,
    "energy_kcal": 539.0,
    "fat_g": 29.7,
    "fibre_g": 5.4,
    "folate_ug": 14.0,
    "iron_mg": 4.38,
    "magnesium_mg": 64.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 152.0,
    "potassium_mg": 407.0,
    "protein_g": 5.41,
    "salt_g": 0.1025,
    "sat_fat_g": 28.4,
    "sodium_mg": 41.0,
    "sugar_g": 54.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.96,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710289",
  "state": "Unspecified",
  "subcategory": "Jams, syrups, toppings",
  "tags": [
    "jams-syrups-toppings",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
