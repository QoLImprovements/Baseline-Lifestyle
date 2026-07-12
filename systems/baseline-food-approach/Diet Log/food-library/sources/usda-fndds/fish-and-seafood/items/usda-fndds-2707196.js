/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2707196",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "1-patty",
      "kind": "unit",
      "label": "1 patty"
    }
  ],
  "name": "Shrimp egg foo yung",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 5.2,
    "energy_kcal": 125.0,
    "fat_g": 6.16,
    "fibre_g": 0.3,
    "folate_ug": 35.0,
    "iron_mg": 1.0,
    "magnesium_mg": 18.0,
    "omega3_g": 0.075,
    "phosphorus_mg": 167.0,
    "potassium_mg": 143.0,
    "protein_g": 11.7,
    "salt_g": 0.85,
    "sat_fat_g": 1.71,
    "sodium_mg": 340.0,
    "sugar_g": 3.07,
    "vitamin_a_ug": 107.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 1.35,
    "vitamin_k_ug": 23.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707196",
  "state": "Unspecified",
  "subcategory": "Stir-fry and soy-based sauce mixtures",
  "tags": [
    "fish-and-seafood",
    "stir-fry-and-soy-based-sauce-mixtures",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
