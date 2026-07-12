/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-small-single-serving-bag",
  "description": "Popcorn",
  "id": "usda-fndds-2708239",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "key": "1-popcorn-ball",
      "kind": "unit",
      "label": "1 popcorn ball"
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
    },
    {
      "gramsPerUnit": 35.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Popcorn, caramel coated",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 78.5,
    "energy_kcal": 428.0,
    "fat_g": 12.7,
    "fibre_g": 5.2,
    "folate_ug": 5.0,
    "iron_mg": 1.73,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 108.0,
    "protein_g": 3.77,
    "salt_g": 1.28,
    "sat_fat_g": 3.58,
    "sodium_mg": 512.0,
    "sugar_g": 52.8,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.19,
    "vitamin_k_ug": 12.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708239",
  "state": "Unspecified",
  "subcategory": "Popcorn",
  "tags": [
    "popcorn",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
