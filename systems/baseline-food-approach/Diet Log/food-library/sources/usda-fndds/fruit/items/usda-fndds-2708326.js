/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-medium-waffle",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708326",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-medium-waffle",
      "kind": "unit",
      "label": "1 medium waffle"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-small-waffle",
      "kind": "unit",
      "label": "1 small waffle"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size-waffle",
      "kind": "unit",
      "label": "1 miniature/bite size waffle"
    },
    {
      "gramsPerUnit": 3.7,
      "key": "1-surface-inch-belgian-waffle",
      "kind": "unit",
      "label": "1 surface inch, Belgian waffle"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-thick-belgian-waffle",
      "kind": "unit",
      "label": "1 thick / Belgian waffle"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-large-waffle",
      "kind": "unit",
      "label": "1 large waffle"
    }
  ],
  "name": "Waffle, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 192.0,
    "carbs_g": 36.2,
    "energy_kcal": 307.0,
    "fat_g": 14.9,
    "fibre_g": 2.8,
    "folate_ug": 43.0,
    "iron_mg": 1.4,
    "magnesium_mg": 20.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 303.0,
    "potassium_mg": 175.0,
    "protein_g": 6.94,
    "salt_g": 1.1675,
    "sat_fat_g": 3.26,
    "sodium_mg": 467.0,
    "sugar_g": 9.11,
    "vitamin_a_ug": 71.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 2.5,
    "vitamin_k_ug": 16.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708326",
  "state": "Unspecified",
  "subcategory": "Pancakes, waffles, French toast",
  "tags": [
    "fruit",
    "pancakes-waffles-french-toast",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
