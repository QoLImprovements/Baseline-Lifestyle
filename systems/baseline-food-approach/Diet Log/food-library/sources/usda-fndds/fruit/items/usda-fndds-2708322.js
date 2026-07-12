/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-thick-belgian-waffle",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708322",
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
      "gramsPerUnit": 2.5,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    }
  ],
  "name": "Waffle, fruit, fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 182.0,
    "carbs_g": 34.5,
    "energy_kcal": 354.0,
    "fat_g": 21.1,
    "fibre_g": 2.7,
    "folate_ug": 41.0,
    "iron_mg": 1.34,
    "magnesium_mg": 19.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 288.0,
    "potassium_mg": 167.0,
    "protein_g": 6.6,
    "salt_g": 1.23,
    "sat_fat_g": 4.03,
    "sodium_mg": 492.0,
    "sugar_g": 8.66,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 3.69,
    "vitamin_k_ug": 22.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708322",
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
