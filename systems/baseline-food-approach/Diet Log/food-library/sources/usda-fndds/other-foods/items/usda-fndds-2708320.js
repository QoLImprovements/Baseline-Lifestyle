/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-large-waffle",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708320",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 2.5,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-medium-waffle",
      "kind": "unit",
      "label": "1 medium waffle"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-thick-belgian-waffle",
      "kind": "unit",
      "label": "1 thick / Belgian waffle"
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
      "gramsPerUnit": 3.7,
      "key": "1-surface-inch-belgian-waffle",
      "kind": "unit",
      "label": "1 surface inch, Belgian waffle"
    }
  ],
  "name": "Waffle, plain, fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 227.0,
    "carbs_g": 38.9,
    "energy_kcal": 428.0,
    "fat_g": 26.4,
    "fibre_g": 2.4,
    "folate_ug": 50.0,
    "iron_mg": 1.62,
    "magnesium_mg": 22.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 359.0,
    "potassium_mg": 192.0,
    "protein_g": 8.16,
    "salt_g": 1.55,
    "sat_fat_g": 5.06,
    "sodium_mg": 620.0,
    "sugar_g": 7.77,
    "vitamin_a_ug": 85.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.47,
    "vitamin_k_ug": 22.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708320",
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
