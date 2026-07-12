/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Potato chips",
  "id": "usda-fndds-2709446",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "10-sticks",
      "kind": "unit",
      "label": "10 sticks"
    }
  ],
  "name": "Potato sticks, fry shaped",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 52.8,
    "energy_kcal": 517.0,
    "fat_g": 34.1,
    "fibre_g": 3.4,
    "folate_ug": 40.0,
    "iron_mg": 2.25,
    "magnesium_mg": 63.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 1220.0,
    "protein_g": 6.63,
    "salt_g": 2.525,
    "sat_fat_g": 8.79,
    "sodium_mg": 1010.0,
    "sugar_g": 0.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 46.8,
    "vitamin_e_mg": 9.02,
    "vitamin_k_ug": 21.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709446",
  "state": "Unspecified",
  "subcategory": "Potato chips",
  "tags": [
    "potato-chips",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
