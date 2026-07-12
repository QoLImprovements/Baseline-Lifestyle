/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-pouch",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708316",
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
      "gramsPerUnit": 40.0,
      "key": "1-waffle",
      "kind": "unit",
      "label": "1 waffle"
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
      "gramsPerUnit": 55.0,
      "key": "1-thick-belgian-waffle",
      "kind": "unit",
      "label": "1 thick / Belgian waffle"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size-waffle",
      "kind": "unit",
      "label": "1 miniature/bite size waffle"
    }
  ],
  "name": "Waffle, chocolate, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 294.0,
    "carbs_g": 48.9,
    "energy_kcal": 320.0,
    "fat_g": 10.5,
    "fibre_g": 2.6,
    "folate_ug": 65.0,
    "iron_mg": 6.38,
    "magnesium_mg": 24.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 432.0,
    "potassium_mg": 150.0,
    "protein_g": 7.43,
    "salt_g": 1.1025,
    "sat_fat_g": 3.09,
    "sodium_mg": 441.0,
    "sugar_g": 6.76,
    "vitamin_a_ug": 419.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 12.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708316",
  "state": "Frozen",
  "subcategory": "Pancakes, waffles, French toast",
  "tags": [
    "frozen",
    "pancakes-waffles-french-toast",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
