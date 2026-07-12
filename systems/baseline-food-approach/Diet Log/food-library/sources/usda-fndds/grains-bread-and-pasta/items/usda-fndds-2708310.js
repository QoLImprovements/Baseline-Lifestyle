/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-large-pancake",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708310",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size-pancake",
      "kind": "unit",
      "label": "1 miniature/bite size pancake"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-extra-large-pancake",
      "kind": "unit",
      "label": "1 extra large pancake"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-silver-dollar-pancake",
      "kind": "unit",
      "label": "1 silver dollar pancake"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-small-pancake",
      "kind": "unit",
      "label": "1 small pancake"
    },
    {
      "gramsPerUnit": 1.9,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    }
  ],
  "name": "Pancakes, whole grain, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 33.6,
    "energy_kcal": 256.0,
    "fat_g": 9.89,
    "fibre_g": 3.3,
    "folate_ug": 33.0,
    "iron_mg": 3.22,
    "magnesium_mg": 43.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 412.0,
    "potassium_mg": 258.0,
    "protein_g": 8.04,
    "salt_g": 1.845,
    "sat_fat_g": 2.71,
    "sodium_mg": 738.0,
    "sugar_g": 7.05,
    "vitamin_a_ug": 81.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.35,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708310",
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
