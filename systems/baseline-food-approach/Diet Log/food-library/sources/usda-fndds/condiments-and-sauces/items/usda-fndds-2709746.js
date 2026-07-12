/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta sauces, tomato-based",
  "id": "usda-fndds-2709746",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Spaghetti sauce with added vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 7.45,
    "energy_kcal": 46.0,
    "fat_g": 1.2,
    "fibre_g": 1.7,
    "folate_ug": 17.0,
    "iron_mg": 0.69,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 316.0,
    "protein_g": 1.52,
    "salt_g": 0.8025,
    "sat_fat_g": 0.146,
    "sodium_mg": 321.0,
    "sugar_g": 4.96,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 12.1,
    "vitamin_e_mg": 1.94,
    "vitamin_k_ug": 11.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709746",
  "state": "Unspecified",
  "subcategory": "Pasta sauces, tomato-based",
  "tags": [
    "condiments-and-sauces",
    "pasta-sauces-tomato-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
