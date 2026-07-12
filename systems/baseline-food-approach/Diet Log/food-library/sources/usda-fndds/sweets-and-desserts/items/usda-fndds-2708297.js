/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-frozen-pancake-nfs",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708297",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-frozen-pancake-nfs",
      "kind": "unit",
      "label": "1 frozen pancake, NFS"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size-pancake",
      "kind": "unit",
      "label": "1 miniature/bite size pancake"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pancakes, chocolate, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 38.8,
    "energy_kcal": 248.0,
    "fat_g": 7.97,
    "fibre_g": 1.1,
    "folate_ug": 58.0,
    "iron_mg": 5.5,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 215.0,
    "potassium_mg": 104.0,
    "protein_g": 5.35,
    "salt_g": 1.105,
    "sat_fat_g": 2.03,
    "sodium_mg": 442.0,
    "sugar_g": 10.5,
    "vitamin_a_ug": 412.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708297",
  "state": "Frozen",
  "subcategory": "Pancakes, waffles, French toast",
  "tags": [
    "frozen",
    "pancakes-waffles-french-toast",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
