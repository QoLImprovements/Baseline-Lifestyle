/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-lobster",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706563",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 400.0,
      "key": "1-lobster",
      "kind": "unit",
      "label": "1 lobster"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Lobster with bread stuffing, baked",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 9.83,
    "energy_kcal": 177.0,
    "fat_g": 8.26,
    "fibre_g": 0.5,
    "folate_ug": 23.0,
    "iron_mg": 0.86,
    "magnesium_mg": 35.0,
    "omega3_g": 0.144,
    "phosphorus_mg": 152.0,
    "potassium_mg": 187.0,
    "protein_g": 15.0,
    "salt_g": 1.6025,
    "sat_fat_g": 4.17,
    "sodium_mg": 641.0,
    "sugar_g": 1.21,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706563",
  "state": "Baked",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "baked",
    "fish-and-seafood",
    "seafood-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
