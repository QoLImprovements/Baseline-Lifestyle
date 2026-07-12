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
  "id": "usda-fndds-2706453",
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
  "name": "Spaghetti sauce with seafood",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 7.09,
    "energy_kcal": 64.0,
    "fat_g": 1.48,
    "fibre_g": 1.5,
    "folate_ug": 12.0,
    "iron_mg": 1.08,
    "magnesium_mg": 21.0,
    "omega3_g": 0.074,
    "phosphorus_mg": 77.0,
    "potassium_mg": 326.0,
    "protein_g": 5.33,
    "salt_g": 1.08,
    "sat_fat_g": 0.185,
    "sodium_mg": 432.0,
    "sugar_g": 4.47,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 2.16,
    "vitamin_k_ug": 11.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706453",
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
