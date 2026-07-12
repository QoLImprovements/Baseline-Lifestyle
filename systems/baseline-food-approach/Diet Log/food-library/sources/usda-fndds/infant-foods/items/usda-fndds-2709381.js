/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Baby food: snacks and sweets",
  "id": "usda-fndds-2709381",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 0.5,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Baby Toddler yogurt melts",
  "nutritionPerBasis": {
    "calcium_mg": 457.0,
    "carbs_g": 71.8,
    "energy_kcal": 380.0,
    "fat_g": 4.0,
    "fibre_g": 2.3,
    "folate_ug": 55.0,
    "iron_mg": 0.0,
    "magnesium_mg": 53.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 382.0,
    "potassium_mg": 714.0,
    "protein_g": 14.3,
    "salt_g": 0.715,
    "sat_fat_g": 2.24,
    "sodium_mg": 286.0,
    "sugar_g": 57.1,
    "vitamin_a_ug": 107.0,
    "vitamin_c_mg": 57.1,
    "vitamin_e_mg": 6.43,
    "vitamin_k_ug": 12.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709381",
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
