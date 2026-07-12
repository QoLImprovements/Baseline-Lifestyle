/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-tablespoon",
  "description": "Baby food: cereals",
  "id": "usda-fndds-2708502",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-jar-tub",
      "kind": "unit",
      "label": "1 jar / tub"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Baby Toddler cereal, multigrain with fruit, ready-to-eat",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 19.2,
    "energy_kcal": 88.0,
    "fat_g": 0.68,
    "fibre_g": 1.2,
    "folate_ug": 10.0,
    "iron_mg": 1.14,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 91.0,
    "protein_g": 1.46,
    "salt_g": 0.005,
    "sat_fat_g": 0.124,
    "sodium_mg": 2.0,
    "sugar_g": 8.18,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708502",
  "state": "Ready-to-eat",
  "subcategory": "Baby food: cereals",
  "tags": [
    "baby-food-cereals",
    "infant-foods",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
