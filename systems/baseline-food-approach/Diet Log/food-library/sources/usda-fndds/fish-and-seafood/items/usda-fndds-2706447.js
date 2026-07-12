/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706447",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fish with cream or white sauce, not tuna or lobster",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 2.75,
    "energy_kcal": 116.0,
    "fat_g": 3.64,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.44,
    "magnesium_mg": 33.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 127.0,
    "potassium_mg": 217.0,
    "protein_g": 17.0,
    "salt_g": 0.8575,
    "sat_fat_g": 1.51,
    "sodium_mg": 343.0,
    "sugar_g": 1.38,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706447",
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
