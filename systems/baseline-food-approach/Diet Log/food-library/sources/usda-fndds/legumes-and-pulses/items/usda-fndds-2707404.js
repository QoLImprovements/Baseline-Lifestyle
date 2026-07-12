/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-tablespoon",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2707404",
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
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Black bean sauce",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 17.4,
    "energy_kcal": 168.0,
    "fat_g": 8.45,
    "fibre_g": 2.6,
    "folate_ug": 44.0,
    "iron_mg": 1.26,
    "magnesium_mg": 54.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 118.0,
    "potassium_mg": 307.0,
    "protein_g": 6.28,
    "salt_g": 14.6,
    "sat_fat_g": 1.26,
    "sodium_mg": 5840.0,
    "sugar_g": 9.26,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.19,
    "vitamin_k_ug": 15.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707404",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "dips-gravies-other-sauces",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
