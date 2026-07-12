/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708329",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-large-waffle",
      "kind": "unit",
      "label": "1 large waffle"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-thick-belgian-waffle",
      "kind": "unit",
      "label": "1 thick / Belgian waffle"
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
      "gramsPerUnit": 40.0,
      "key": "1-small-waffle",
      "kind": "unit",
      "label": "1 small waffle"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-medium-waffle",
      "kind": "unit",
      "label": "1 medium waffle"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    }
  ],
  "name": "Waffle, whole grain",
  "nutritionPerBasis": {
    "calcium_mg": 162.0,
    "carbs_g": 38.6,
    "energy_kcal": 364.0,
    "fat_g": 19.2,
    "fibre_g": 3.8,
    "folate_ug": 38.0,
    "iron_mg": 3.71,
    "magnesium_mg": 50.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 473.0,
    "potassium_mg": 295.0,
    "protein_g": 9.23,
    "salt_g": 2.1175,
    "sat_fat_g": 4.16,
    "sodium_mg": 847.0,
    "sugar_g": 8.09,
    "vitamin_a_ug": 93.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.04,
    "vitamin_k_ug": 15.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708329",
  "state": "Unspecified",
  "subcategory": "Pancakes, waffles, French toast",
  "tags": [
    "grains-bread-and-pasta",
    "pancakes-waffles-french-toast",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
