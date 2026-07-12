/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2710178",
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
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Curry sauce",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 5.03,
    "energy_kcal": 95.0,
    "fat_g": 8.22,
    "fibre_g": 1.4,
    "folate_ug": 9.0,
    "iron_mg": 0.89,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 268.0,
    "protein_g": 1.39,
    "salt_g": 0.9575,
    "sat_fat_g": 2.48,
    "sodium_mg": 383.0,
    "sugar_g": 3.37,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 2.31,
    "vitamin_k_ug": 8.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710178",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "condiments-and-sauces",
    "dips-gravies-other-sauces",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
