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
  "id": "usda-fndds-2707446",
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
      "gramsPerUnit": 9.0,
      "key": "1-individual-packet",
      "kind": "unit",
      "label": "1 individual packet"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Teriyaki sauce, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 15.6,
    "energy_kcal": 89.0,
    "fat_g": 0.02,
    "fibre_g": 0.1,
    "folate_ug": 8.0,
    "iron_mg": 1.7,
    "magnesium_mg": 61.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 154.0,
    "potassium_mg": 225.0,
    "protein_g": 5.93,
    "salt_g": 4.45,
    "sat_fat_g": 0.0,
    "sodium_mg": 1780.0,
    "sugar_g": 14.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707446",
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
