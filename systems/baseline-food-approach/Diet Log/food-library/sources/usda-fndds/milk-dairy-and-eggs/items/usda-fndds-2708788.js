/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708788",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 247.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 247.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 425.0,
      "key": "1-can-15-oz",
      "kind": "unit",
      "label": "1 can (15 oz)"
    }
  ],
  "name": "Tortellini, cheese-filled, meatless, with tomato sauce, canned",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 16.0,
    "energy_kcal": 91.0,
    "fat_g": 1.5,
    "fibre_g": 0.8,
    "folate_ug": 33.0,
    "iron_mg": 0.66,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 39.0,
    "protein_g": 3.48,
    "salt_g": 0.7625,
    "sat_fat_g": 0.537,
    "sodium_mg": 305.0,
    "sugar_g": 1.74,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708788",
  "state": "Canned",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "canned",
    "milk-dairy-and-eggs",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
