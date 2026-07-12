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
  "id": "usda-fndds-2708971",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Sushi, topped with tuna",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 13.4,
    "energy_kcal": 100.0,
    "fat_g": 0.29,
    "fibre_g": 0.6,
    "folate_ug": 1.0,
    "iron_mg": 0.35,
    "magnesium_mg": 15.0,
    "omega3_g": 0.035,
    "phosphorus_mg": 101.0,
    "potassium_mg": 159.0,
    "protein_g": 9.66,
    "salt_g": 0.765,
    "sat_fat_g": 0.083,
    "sodium_mg": 306.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708971",
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
