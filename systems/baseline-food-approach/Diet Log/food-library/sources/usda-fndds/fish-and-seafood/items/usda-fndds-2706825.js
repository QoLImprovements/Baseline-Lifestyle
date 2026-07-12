/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706825",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Lobster salad",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 1.22,
    "energy_kcal": 187.0,
    "fat_g": 15.4,
    "fibre_g": 0.4,
    "folate_ug": 16.0,
    "iron_mg": 0.2,
    "magnesium_mg": 25.0,
    "omega3_g": 0.106,
    "phosphorus_mg": 107.0,
    "potassium_mg": 188.0,
    "protein_g": 10.3,
    "salt_g": 1.27,
    "sat_fat_g": 2.45,
    "sodium_mg": 508.0,
    "sugar_g": 0.55,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 1.25,
    "vitamin_k_ug": 38.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706825",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fish-and-seafood",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
