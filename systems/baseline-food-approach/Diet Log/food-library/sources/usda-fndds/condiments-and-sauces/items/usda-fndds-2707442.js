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
  "id": "usda-fndds-2707442",
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
    },
    {
      "gramsPerUnit": 16.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Soy sauce",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 4.93,
    "energy_kcal": 53.0,
    "fat_g": 0.57,
    "fibre_g": 0.8,
    "folate_ug": 14.0,
    "iron_mg": 1.45,
    "magnesium_mg": 74.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 166.0,
    "potassium_mg": 435.0,
    "protein_g": 8.14,
    "salt_g": 13.725,
    "sat_fat_g": 0.073,
    "sodium_mg": 5490.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707442",
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
