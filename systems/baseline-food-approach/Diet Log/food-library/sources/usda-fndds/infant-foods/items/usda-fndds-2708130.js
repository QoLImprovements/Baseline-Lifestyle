/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-cookie",
  "description": "Baby food: snacks and sweets",
  "id": "usda-fndds-2708130",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-cookie",
      "kind": "unit",
      "label": "1 cookie"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Baby Toddler cookie",
  "nutritionPerBasis": {
    "calcium_mg": 690.0,
    "carbs_g": 69.8,
    "energy_kcal": 420.0,
    "fat_g": 11.2,
    "fibre_g": 3.0,
    "folate_ug": 71.0,
    "iron_mg": 11.5,
    "magnesium_mg": 56.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 182.0,
    "potassium_mg": 410.0,
    "protein_g": 9.88,
    "salt_g": 0.7,
    "sat_fat_g": 1.58,
    "sodium_mg": 280.0,
    "sugar_g": 24.6,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 7.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708130",
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
