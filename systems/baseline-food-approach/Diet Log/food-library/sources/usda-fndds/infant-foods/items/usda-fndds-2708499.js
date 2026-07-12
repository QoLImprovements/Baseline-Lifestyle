/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-jar-tub",
  "description": "Baby food: cereals",
  "id": "usda-fndds-2708499",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-jar-tub",
      "kind": "unit",
      "label": "1 jar / tub"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Baby Toddler cereal, rice, ready-to-eat",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 16.1,
    "energy_kcal": 73.0,
    "fat_g": 0.3,
    "fibre_g": 0.1,
    "folate_ug": 12.0,
    "iron_mg": 2.16,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 23.0,
    "protein_g": 1.38,
    "salt_g": 0.005,
    "sat_fat_g": 0.071,
    "sodium_mg": 2.0,
    "sugar_g": 0.21,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708499",
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
