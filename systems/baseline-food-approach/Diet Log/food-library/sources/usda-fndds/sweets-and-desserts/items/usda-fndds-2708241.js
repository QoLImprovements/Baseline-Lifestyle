/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cup",
  "description": "Popcorn",
  "id": "usda-fndds-2708241",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
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
      "gramsPerUnit": 0.6,
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
  "name": "Popcorn, chocolate coated",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 76.4,
    "energy_kcal": 407.0,
    "fat_g": 12.8,
    "fibre_g": 8.3,
    "folate_ug": 8.0,
    "iron_mg": 2.93,
    "magnesium_mg": 81.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 147.0,
    "potassium_mg": 249.0,
    "protein_g": 5.34,
    "salt_g": 1.2325,
    "sat_fat_g": 4.02,
    "sodium_mg": 493.0,
    "sugar_g": 47.7,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.08,
    "vitamin_k_ug": 11.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708241",
  "state": "Unspecified",
  "subcategory": "Popcorn",
  "tags": [
    "popcorn",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
