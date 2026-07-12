/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-thick-belgian-waffle",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708325",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-thick-belgian-waffle",
      "kind": "unit",
      "label": "1 thick / Belgian waffle"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-medium-waffle",
      "kind": "unit",
      "label": "1 medium waffle"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-large-waffle",
      "kind": "unit",
      "label": "1 large waffle"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size-waffle",
      "kind": "unit",
      "label": "1 miniature/bite size waffle"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-small-waffle",
      "kind": "unit",
      "label": "1 small waffle"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 3.7,
      "key": "1-surface-inch-belgian-waffle",
      "kind": "unit",
      "label": "1 surface inch, Belgian waffle"
    }
  ],
  "name": "Waffle, plain",
  "nutritionPerBasis": {
    "calcium_mg": 242.0,
    "carbs_g": 41.5,
    "energy_kcal": 373.0,
    "fat_g": 18.8,
    "fibre_g": 2.5,
    "folate_ug": 54.0,
    "iron_mg": 1.72,
    "magnesium_mg": 23.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 383.0,
    "potassium_mg": 205.0,
    "protein_g": 8.7,
    "salt_g": 1.4925,
    "sat_fat_g": 4.15,
    "sodium_mg": 597.0,
    "sugar_g": 8.28,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.01,
    "vitamin_k_ug": 14.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708325",
  "state": "Unspecified",
  "subcategory": "Pancakes, waffles, French toast",
  "tags": [
    "other-foods",
    "pancakes-waffles-french-toast",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
