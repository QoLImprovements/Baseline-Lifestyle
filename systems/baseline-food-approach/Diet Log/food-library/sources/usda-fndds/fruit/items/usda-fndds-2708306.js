/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-surface-inch",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708306",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.9,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-large-pancake",
      "kind": "unit",
      "label": "1 large pancake"
    },
    {
      "gramsPerUnit": 100.0,
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
      "gramsPerUnit": 20.0,
      "key": "1-small-pancake",
      "kind": "unit",
      "label": "1 small pancake"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-silver-dollar-pancake",
      "kind": "unit",
      "label": "1 silver dollar pancake"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-medium-pancake",
      "kind": "unit",
      "label": "1 medium pancake"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-extra-large-pancake",
      "kind": "unit",
      "label": "1 extra large pancake"
    }
  ],
  "name": "Pancakes, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 162.0,
    "carbs_g": 30.6,
    "energy_kcal": 232.0,
    "fat_g": 9.54,
    "fibre_g": 2.4,
    "folate_ug": 37.0,
    "iron_mg": 1.18,
    "magnesium_mg": 17.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 256.0,
    "potassium_mg": 148.0,
    "protein_g": 5.86,
    "salt_g": 0.9875,
    "sat_fat_g": 2.35,
    "sodium_mg": 395.0,
    "sugar_g": 7.7,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 1.53,
    "vitamin_k_ug": 10.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708306",
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
