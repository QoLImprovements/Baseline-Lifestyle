/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-pancake",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708298",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-pancake",
      "kind": "unit",
      "label": "1 pancake"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size-pancake",
      "kind": "unit",
      "label": "1 miniature/bite size pancake"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    }
  ],
  "name": "Pancakes, whole grain, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 38.6,
    "energy_kcal": 232.0,
    "fat_g": 6.75,
    "fibre_g": 2.3,
    "folate_ug": 61.0,
    "iron_mg": 5.82,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 239.0,
    "potassium_mg": 123.0,
    "protein_g": 5.54,
    "salt_g": 1.1175,
    "sat_fat_g": 1.15,
    "sodium_mg": 447.0,
    "sugar_g": 8.08,
    "vitamin_a_ug": 417.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.65,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708298",
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
