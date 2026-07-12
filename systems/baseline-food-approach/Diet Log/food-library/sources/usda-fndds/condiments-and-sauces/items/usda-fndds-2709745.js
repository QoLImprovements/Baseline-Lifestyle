/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Pasta sauces, tomato-based",
  "id": "usda-fndds-2709745",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Spaghetti sauce",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 8.05,
    "energy_kcal": 51.0,
    "fat_g": 1.48,
    "fibre_g": 1.8,
    "folate_ug": 13.0,
    "iron_mg": 0.78,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 319.0,
    "protein_g": 1.41,
    "salt_g": 1.0475,
    "sat_fat_g": 0.17,
    "sodium_mg": 419.0,
    "sugar_g": 5.5,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 2.4,
    "vitamin_k_ug": 13.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709745",
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
