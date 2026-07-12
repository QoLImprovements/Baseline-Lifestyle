/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "guideline-amount-per-slice-of-bread-roll",
  "description": "Jams, syrups, toppings",
  "id": "usda-fndds-2710301",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "guideline-amount-per-slice-of-bread-roll",
      "kind": "unit",
      "label": "Guideline amount per slice of bread/roll"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-individual-packet",
      "kind": "unit",
      "label": "1 individual packet"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Jam",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 68.9,
    "energy_kcal": 278.0,
    "fat_g": 0.07,
    "fibre_g": 1.1,
    "folate_ug": 11.0,
    "iron_mg": 0.49,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 77.0,
    "protein_g": 0.37,
    "salt_g": 0.08,
    "sat_fat_g": 0.01,
    "sodium_mg": 32.0,
    "sugar_g": 48.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.8,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710301",
  "state": "Unspecified",
  "subcategory": "Jams, syrups, toppings",
  "tags": [
    "jams-syrups-toppings",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
