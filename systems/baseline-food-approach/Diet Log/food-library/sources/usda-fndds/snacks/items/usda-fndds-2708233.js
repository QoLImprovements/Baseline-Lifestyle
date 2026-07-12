/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-large-single-serving-bag",
  "description": "Popcorn",
  "id": "usda-fndds-2708233",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-single-serving-bag-nfs",
      "kind": "unit",
      "label": "1 single serving bag, NFS"
    },
    {
      "gramsPerUnit": 0.2,
      "key": "1-kernel",
      "kind": "unit",
      "label": "1 kernel"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    }
  ],
  "name": "Popcorn, ready-to-eat, plain, light",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 68.1,
    "energy_kcal": 437.0,
    "fat_g": 14.9,
    "fibre_g": 12.7,
    "folate_ug": 27.0,
    "iron_mg": 2.79,
    "magnesium_mg": 126.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 313.0,
    "potassium_mg": 288.0,
    "protein_g": 11.3,
    "salt_g": 1.5,
    "sat_fat_g": 2.02,
    "sodium_mg": 600.0,
    "sugar_g": 0.76,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.73,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708233",
  "state": "Ready-to-eat",
  "subcategory": "Popcorn",
  "tags": [
    "popcorn",
    "ready-to-eat",
    "snacks"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
