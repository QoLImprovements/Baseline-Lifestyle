/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-tablespoon",
  "description": "Soy-based condiments",
  "id": "usda-fndds-2707441",
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
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Hoisin sauce",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 44.1,
    "energy_kcal": 220.0,
    "fat_g": 3.39,
    "fibre_g": 2.8,
    "folate_ug": 23.0,
    "iron_mg": 1.01,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 119.0,
    "protein_g": 3.31,
    "salt_g": 4.05,
    "sat_fat_g": 0.568,
    "sodium_mg": 1620.0,
    "sugar_g": 27.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707441",
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
