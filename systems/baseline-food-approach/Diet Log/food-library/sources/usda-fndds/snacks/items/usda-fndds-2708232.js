/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-single-serving-bag-nfs",
  "description": "Popcorn",
  "id": "usda-fndds-2708232",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-single-serving-bag-nfs",
      "kind": "unit",
      "label": "1 single serving bag, NFS"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    },
    {
      "gramsPerUnit": 0.2,
      "key": "1-kernel",
      "kind": "unit",
      "label": "1 kernel"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    }
  ],
  "name": "Popcorn, ready-to-eat, plain",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 61.2,
    "energy_kcal": 482.0,
    "fat_g": 23.3,
    "fibre_g": 11.4,
    "folate_ug": 24.0,
    "iron_mg": 2.51,
    "magnesium_mg": 113.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 282.0,
    "potassium_mg": 259.0,
    "protein_g": 10.2,
    "salt_g": 1.54,
    "sat_fat_g": 3.14,
    "sodium_mg": 616.0,
    "sugar_g": 0.68,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.68,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708232",
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
