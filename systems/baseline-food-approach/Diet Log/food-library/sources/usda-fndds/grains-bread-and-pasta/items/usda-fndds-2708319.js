/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-miniature-bite-size-waffle",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708319",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size-waffle",
      "kind": "unit",
      "label": "1 miniature/bite size waffle"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-thick-belgian-waffle",
      "kind": "unit",
      "label": "1 thick / Belgian waffle"
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
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    }
  ],
  "name": "Waffle, whole grain, fruit, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 45.1,
    "energy_kcal": 278.0,
    "fat_g": 8.02,
    "fibre_g": 4.0,
    "folate_ug": 44.0,
    "iron_mg": 5.83,
    "magnesium_mg": 59.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 259.0,
    "potassium_mg": 151.0,
    "protein_g": 6.48,
    "salt_g": 1.26,
    "sat_fat_g": 1.28,
    "sodium_mg": 504.0,
    "sugar_g": 4.28,
    "vitamin_a_ug": 133.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 8.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708319",
  "state": "Frozen",
  "subcategory": "Pancakes, waffles, French toast",
  "tags": [
    "frozen",
    "grains-bread-and-pasta",
    "pancakes-waffles-french-toast"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
