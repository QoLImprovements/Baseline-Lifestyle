/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-piece",
  "description": "Egg rolls, dumplings, sushi",
  "id": "usda-fndds-2708963",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Sushi roll, salmon",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 15.3,
    "energy_kcal": 103.0,
    "fat_g": 1.28,
    "fibre_g": 0.7,
    "folate_ug": 4.0,
    "iron_mg": 0.22,
    "magnesium_mg": 11.0,
    "omega3_g": 0.196,
    "phosphorus_mg": 69.0,
    "potassium_mg": 101.0,
    "protein_g": 6.88,
    "salt_g": 0.875,
    "sat_fat_g": 0.226,
    "sodium_mg": 350.0,
    "sugar_g": 0.92,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708963",
  "state": "Unspecified",
  "subcategory": "Egg rolls, dumplings, sushi",
  "tags": [
    "egg-rolls-dumplings-sushi",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
