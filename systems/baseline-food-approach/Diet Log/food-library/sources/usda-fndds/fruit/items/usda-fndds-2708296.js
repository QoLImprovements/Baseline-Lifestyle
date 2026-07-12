/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-miniature-bite-size-pancake",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708296",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size-pancake",
      "kind": "unit",
      "label": "1 miniature/bite size pancake"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-pancake",
      "kind": "unit",
      "label": "1 pancake"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    }
  ],
  "name": "Pancakes, fruit, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 36.5,
    "energy_kcal": 224.0,
    "fat_g": 6.52,
    "fibre_g": 1.1,
    "folate_ug": 58.0,
    "iron_mg": 5.4,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 205.0,
    "potassium_mg": 88.0,
    "protein_g": 4.99,
    "salt_g": 1.095,
    "sat_fat_g": 1.11,
    "sodium_mg": 438.0,
    "sugar_g": 8.33,
    "vitamin_a_ug": 409.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708296",
  "state": "Frozen",
  "subcategory": "Pancakes, waffles, French toast",
  "tags": [
    "frozen",
    "fruit",
    "pancakes-waffles-french-toast"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
