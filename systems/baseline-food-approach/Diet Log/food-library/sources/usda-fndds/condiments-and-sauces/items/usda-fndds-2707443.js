/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "guideline-amount-per-piece-of-sushi",
  "description": "Soy-based condiments",
  "id": "usda-fndds-2707443",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "guideline-amount-per-piece-of-sushi",
      "kind": "unit",
      "label": "Guideline amount per piece of sushi"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-individual-packet",
      "kind": "unit",
      "label": "1 individual packet"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Soy sauce, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 5.59,
    "energy_kcal": 57.0,
    "fat_g": 0.3,
    "fibre_g": 0.7,
    "folate_ug": 44.0,
    "iron_mg": 1.35,
    "magnesium_mg": 69.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 166.0,
    "potassium_mg": 352.0,
    "protein_g": 9.05,
    "salt_g": 9.0,
    "sat_fat_g": 0.035,
    "sodium_mg": 3600.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707443",
  "state": "Unspecified",
  "subcategory": "Soy-based condiments",
  "tags": [
    "condiments-and-sauces",
    "soy-based-condiments",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
