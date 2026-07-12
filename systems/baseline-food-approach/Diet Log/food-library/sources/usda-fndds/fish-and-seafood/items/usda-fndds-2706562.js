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
  "id": "usda-fndds-2706562",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Flounder with crab stuffing",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 5.73,
    "energy_kcal": 136.0,
    "fat_g": 5.52,
    "fibre_g": 0.3,
    "folate_ug": 26.0,
    "iron_mg": 0.72,
    "magnesium_mg": 26.0,
    "omega3_g": 0.252,
    "phosphorus_mg": 270.0,
    "potassium_mg": 210.0,
    "protein_g": 15.1,
    "salt_g": 1.0675,
    "sat_fat_g": 1.21,
    "sodium_mg": 427.0,
    "sugar_g": 0.85,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 1.27,
    "vitamin_k_ug": 14.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706562",
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
