/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-pouch",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708315",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size-waffle",
      "kind": "unit",
      "label": "1 miniature/bite size waffle"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-thick-belgian-waffle",
      "kind": "unit",
      "label": "1 thick / Belgian waffle"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-stick",
      "kind": "unit",
      "label": "1 stick"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-waffle",
      "kind": "unit",
      "label": "1 waffle"
    }
  ],
  "name": "Waffle, fruit, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 284.0,
    "carbs_g": 46.6,
    "energy_kcal": 296.0,
    "fat_g": 9.05,
    "fibre_g": 2.6,
    "folate_ug": 65.0,
    "iron_mg": 6.27,
    "magnesium_mg": 21.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 422.0,
    "potassium_mg": 134.0,
    "protein_g": 7.07,
    "salt_g": 1.0925,
    "sat_fat_g": 2.16,
    "sodium_mg": 437.0,
    "sugar_g": 4.61,
    "vitamin_a_ug": 416.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 12.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708315",
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
