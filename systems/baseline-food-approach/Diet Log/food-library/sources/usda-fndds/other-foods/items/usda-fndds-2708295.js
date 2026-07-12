/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708295",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size-pancake",
      "kind": "unit",
      "label": "1 miniature/bite size pancake"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-pancake",
      "kind": "unit",
      "label": "1 pancake"
    }
  ],
  "name": "Pancakes, plain, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 37.8,
    "energy_kcal": 233.0,
    "fat_g": 6.83,
    "fibre_g": 1.0,
    "folate_ug": 60.0,
    "iron_mg": 5.67,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 215.0,
    "potassium_mg": 90.0,
    "protein_g": 5.23,
    "salt_g": 1.1525,
    "sat_fat_g": 1.16,
    "sodium_mg": 461.0,
    "sugar_g": 8.32,
    "vitamin_a_ug": 430.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708295",
  "state": "Frozen",
  "subcategory": "Pancakes, waffles, French toast",
  "tags": [
    "frozen",
    "other-foods",
    "pancakes-waffles-french-toast"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
