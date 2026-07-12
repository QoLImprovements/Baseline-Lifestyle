/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-piece",
  "description": "Baby food: snacks and sweets",
  "id": "usda-fndds-2708193",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 0.5,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Baby Toddler crunchies",
  "nutritionPerBasis": {
    "calcium_mg": 342.0,
    "carbs_g": 69.1,
    "energy_kcal": 462.0,
    "fat_g": 19.2,
    "fibre_g": 1.2,
    "folate_ug": 66.0,
    "iron_mg": 14.4,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 876.0,
    "potassium_mg": 164.0,
    "protein_g": 3.2,
    "salt_g": 0.625,
    "sat_fat_g": 3.16,
    "sodium_mg": 250.0,
    "sugar_g": 14.0,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 6.24,
    "vitamin_k_ug": 12.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708193",
  "state": "Unspecified",
  "subcategory": "Baby food: snacks and sweets",
  "tags": [
    "baby-food-snacks-and-sweets",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
