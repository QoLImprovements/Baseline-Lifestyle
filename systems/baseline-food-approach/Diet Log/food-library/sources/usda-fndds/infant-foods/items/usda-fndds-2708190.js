/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-cracker",
  "description": "Baby food: snacks and sweets",
  "id": "usda-fndds-2708190",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-cracker",
      "kind": "unit",
      "label": "1 cracker"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Baby Toddler crackers",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 83.2,
    "energy_kcal": 391.0,
    "fat_g": 0.87,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 0.0,
    "magnesium_mg": 47.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 127.0,
    "potassium_mg": 504.0,
    "protein_g": 12.5,
    "salt_g": 0.7825,
    "sat_fat_g": 0.238,
    "sodium_mg": 313.0,
    "sugar_g": 12.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708190",
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
