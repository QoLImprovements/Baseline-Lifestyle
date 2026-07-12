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
  "id": "usda-fndds-2708131",
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
      "key": "1-biscuit",
      "kind": "unit",
      "label": "1 biscuit"
    }
  ],
  "name": "Baby Toddler biscuit",
  "nutritionPerBasis": {
    "calcium_mg": 320.0,
    "carbs_g": 80.5,
    "energy_kcal": 395.0,
    "fat_g": 2.97,
    "fibre_g": 1.5,
    "folate_ug": 23.0,
    "iron_mg": 4.72,
    "magnesium_mg": 51.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 142.0,
    "potassium_mg": 458.0,
    "protein_g": 11.4,
    "salt_g": 0.75,
    "sat_fat_g": 0.381,
    "sodium_mg": 300.0,
    "sugar_g": 15.6,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708131",
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
