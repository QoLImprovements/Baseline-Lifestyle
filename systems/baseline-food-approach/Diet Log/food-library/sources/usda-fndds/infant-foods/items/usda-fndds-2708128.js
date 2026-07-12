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
  "id": "usda-fndds-2708128",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.0,
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
  "name": "Baby Toddler snack, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 518.0,
    "carbs_g": 83.4,
    "energy_kcal": 359.0,
    "fat_g": 3.29,
    "fibre_g": 3.4,
    "folate_ug": 23.0,
    "iron_mg": 20.4,
    "magnesium_mg": 58.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 376.0,
    "potassium_mg": 257.0,
    "protein_g": 7.34,
    "salt_g": 0.2075,
    "sat_fat_g": 0.322,
    "sodium_mg": 83.0,
    "sugar_g": 18.2,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 7.83,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708128",
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
