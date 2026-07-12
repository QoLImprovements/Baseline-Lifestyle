/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-cup",
  "description": "Popcorn",
  "id": "usda-fndds-2708238",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-single-serving-bag-nfs",
      "kind": "unit",
      "label": "1 single serving bag, NFS"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
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
  "name": "Popcorn, ready-to-eat, kettle",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 61.0,
    "energy_kcal": 531.0,
    "fat_g": 30.2,
    "fibre_g": 6.1,
    "folate_ug": 13.0,
    "iron_mg": 1.36,
    "magnesium_mg": 61.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 151.0,
    "potassium_mg": 140.0,
    "protein_g": 5.48,
    "salt_g": 1.2375,
    "sat_fat_g": 4.05,
    "sodium_mg": 495.0,
    "sugar_g": 28.5,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 6.5,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708238",
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
