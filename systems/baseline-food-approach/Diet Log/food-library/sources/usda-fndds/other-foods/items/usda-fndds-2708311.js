/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-small-pancake",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708311",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-small-pancake",
      "kind": "unit",
      "label": "1 small pancake"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-large-pancake",
      "kind": "unit",
      "label": "1 large pancake"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-medium-pancake",
      "kind": "unit",
      "label": "1 medium pancake"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 1.9,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size-pancake",
      "kind": "unit",
      "label": "1 miniature/bite size pancake"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-silver-dollar-pancake",
      "kind": "unit",
      "label": "1 silver dollar pancake"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-extra-large-pancake",
      "kind": "unit",
      "label": "1 extra large pancake"
    }
  ],
  "name": "Pancakes, gluten free",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 40.3,
    "energy_kcal": 215.0,
    "fat_g": 4.55,
    "fibre_g": 1.5,
    "folate_ug": 8.0,
    "iron_mg": 0.7,
    "magnesium_mg": 34.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 306.0,
    "potassium_mg": 127.0,
    "protein_g": 3.31,
    "salt_g": 0.8275,
    "sat_fat_g": 0.48,
    "sodium_mg": 331.0,
    "sugar_g": 4.06,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708311",
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
