/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Popcorn",
  "id": "usda-fndds-2708236",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
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
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-single-serving-bag-nfs",
      "kind": "unit",
      "label": "1 single serving bag, NFS"
    }
  ],
  "name": "Popcorn, ready-to-eat, cheese flavored",
  "nutritionPerBasis": {
    "calcium_mg": 113.0,
    "carbs_g": 51.6,
    "energy_kcal": 526.0,
    "fat_g": 33.2,
    "fibre_g": 9.9,
    "folate_ug": 11.0,
    "iron_mg": 2.24,
    "magnesium_mg": 91.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 361.0,
    "potassium_mg": 261.0,
    "protein_g": 9.3,
    "salt_g": 2.2225,
    "sat_fat_g": 6.41,
    "sodium_mg": 889.0,
    "sugar_g": 0.79,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 3.82,
    "vitamin_k_ug": 8.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708236",
  "state": "Ready-to-eat",
  "subcategory": "Popcorn",
  "tags": [
    "milk-dairy-and-eggs",
    "popcorn",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
