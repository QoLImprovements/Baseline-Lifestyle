/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Baby food: cereals",
  "id": "usda-fndds-2708504",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
    }
  ],
  "name": "Baby Toddler cereal, rice with fruit, ready-to-eat",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 20.0,
    "energy_kcal": 87.0,
    "fat_g": 0.27,
    "fibre_g": 0.6,
    "folate_ug": 12.0,
    "iron_mg": 1.54,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 70.0,
    "protein_g": 1.12,
    "salt_g": 0.005,
    "sat_fat_g": 0.062,
    "sodium_mg": 2.0,
    "sugar_g": 7.54,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708504",
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
