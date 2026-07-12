/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta sauces, tomato-based",
  "id": "usda-fndds-2706454",
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
  "name": "Spaghetti sauce with seafood and added vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 6.6,
    "energy_kcal": 60.0,
    "fat_g": 1.25,
    "fibre_g": 1.4,
    "folate_ug": 15.0,
    "iron_mg": 1.01,
    "magnesium_mg": 20.0,
    "omega3_g": 0.074,
    "phosphorus_mg": 81.0,
    "potassium_mg": 323.0,
    "protein_g": 5.43,
    "salt_g": 0.8825,
    "sat_fat_g": 0.165,
    "sodium_mg": 353.0,
    "sugar_g": 4.03,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 10.2,
    "vitamin_e_mg": 1.79,
    "vitamin_k_ug": 9.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706454",
  "state": "Unspecified",
  "subcategory": "Pasta sauces, tomato-based",
  "tags": [
    "fish-and-seafood",
    "pasta-sauces-tomato-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
