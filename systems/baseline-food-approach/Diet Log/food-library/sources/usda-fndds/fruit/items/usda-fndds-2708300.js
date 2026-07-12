/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-silver-dollar-pancake",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708300",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-silver-dollar-pancake",
      "kind": "unit",
      "label": "1 silver dollar pancake"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size-pancake",
      "kind": "unit",
      "label": "1 miniature/bite size pancake"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-large-pancake",
      "kind": "unit",
      "label": "1 large pancake"
    },
    {
      "gramsPerUnit": 1.9,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
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
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-small-pancake",
      "kind": "unit",
      "label": "1 small pancake"
    }
  ],
  "name": "Pancakes, fruit, fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 158.0,
    "carbs_g": 29.8,
    "energy_kcal": 253.0,
    "fat_g": 12.3,
    "fibre_g": 2.3,
    "folate_ug": 36.0,
    "iron_mg": 1.15,
    "magnesium_mg": 16.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 249.0,
    "potassium_mg": 144.0,
    "protein_g": 5.71,
    "salt_g": 1.065,
    "sat_fat_g": 2.69,
    "sodium_mg": 426.0,
    "sugar_g": 7.49,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 2.06,
    "vitamin_k_ug": 13.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708300",
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
