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
  "id": "usda-fndds-2708194",
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
      "gramsPerUnit": 2.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Baby Toddler wheels",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 78.9,
    "energy_kcal": 413.0,
    "fat_g": 6.41,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 1.28,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 310.0,
    "potassium_mg": 446.0,
    "protein_g": 10.0,
    "salt_g": 0.875,
    "sat_fat_g": 1.12,
    "sodium_mg": 350.0,
    "sugar_g": 10.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.85,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708194",
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
