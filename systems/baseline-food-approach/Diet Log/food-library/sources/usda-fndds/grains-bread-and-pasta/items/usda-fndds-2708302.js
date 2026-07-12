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
  "id": "usda-fndds-2708302",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 50.0,
      "key": "1-medium-pancake",
      "kind": "unit",
      "label": "1 medium pancake"
    },
    {
      "gramsPerUnit": 1.9,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-silver-dollar-pancake",
      "kind": "unit",
      "label": "1 silver dollar pancake"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-large-pancake",
      "kind": "unit",
      "label": "1 large pancake"
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
  "name": "Pancakes, whole grain, fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 133.0,
    "carbs_g": 31.8,
    "energy_kcal": 299.0,
    "fat_g": 15.8,
    "fibre_g": 3.1,
    "folate_ug": 31.0,
    "iron_mg": 3.05,
    "magnesium_mg": 41.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 389.0,
    "potassium_mg": 243.0,
    "protein_g": 7.59,
    "salt_g": 1.8775,
    "sat_fat_g": 3.42,
    "sodium_mg": 751.0,
    "sugar_g": 6.65,
    "vitamin_a_ug": 76.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.5,
    "vitamin_k_ug": 12.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708302",
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
