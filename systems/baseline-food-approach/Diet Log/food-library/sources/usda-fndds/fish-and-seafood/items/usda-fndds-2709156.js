/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Ramen and Asian broth-based soups",
  "id": "usda-fndds-2709156",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Ramen bowl with fish",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 15.4,
    "energy_kcal": 112.0,
    "fat_g": 2.87,
    "fibre_g": 1.0,
    "folate_ug": 43.0,
    "iron_mg": 0.77,
    "magnesium_mg": 14.0,
    "omega3_g": 0.027,
    "phosphorus_mg": 76.0,
    "potassium_mg": 94.0,
    "protein_g": 5.78,
    "salt_g": 0.8975,
    "sat_fat_g": 0.417,
    "sodium_mg": 359.0,
    "sugar_g": 0.44,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 14.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709156",
  "state": "Unspecified",
  "subcategory": "Ramen and Asian broth-based soups",
  "tags": [
    "fish-and-seafood",
    "ramen-and-asian-broth-based-soups",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
