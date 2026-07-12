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
  "id": "usda-fndds-2708231",
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
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 0.2,
      "key": "1-kernel",
      "kind": "unit",
      "label": "1 kernel"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    }
  ],
  "name": "Popcorn, ready-to-eat, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 53.4,
    "energy_kcal": 530.0,
    "fat_g": 32.5,
    "fibre_g": 10.0,
    "folate_ug": 21.0,
    "iron_mg": 2.19,
    "magnesium_mg": 99.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 246.0,
    "potassium_mg": 226.0,
    "protein_g": 8.88,
    "salt_g": 1.91,
    "sat_fat_g": 4.38,
    "sodium_mg": 764.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 6.85,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708231",
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
