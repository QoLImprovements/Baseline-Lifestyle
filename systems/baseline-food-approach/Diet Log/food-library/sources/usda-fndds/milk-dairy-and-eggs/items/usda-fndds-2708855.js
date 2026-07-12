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
  "id": "usda-fndds-2708855",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pasta with cream sauce, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 15.6,
    "energy_kcal": 204.0,
    "fat_g": 14.0,
    "fibre_g": 0.9,
    "folate_ug": 36.0,
    "iron_mg": 0.64,
    "magnesium_mg": 10.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 50.0,
    "potassium_mg": 39.0,
    "protein_g": 3.72,
    "salt_g": 1.4425,
    "sat_fat_g": 4.79,
    "sodium_mg": 577.0,
    "sugar_g": 0.67,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 7.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708855",
  "state": "Unspecified",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "milk-dairy-and-eggs",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
