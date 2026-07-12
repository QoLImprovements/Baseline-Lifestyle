/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708858",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pasta with cream sauce and added vegetables, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 16.0,
    "energy_kcal": 191.0,
    "fat_g": 12.4,
    "fibre_g": 1.0,
    "folate_ug": 39.0,
    "iron_mg": 0.67,
    "magnesium_mg": 12.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 51.0,
    "potassium_mg": 67.0,
    "protein_g": 3.7,
    "salt_g": 1.2975,
    "sat_fat_g": 3.9,
    "sodium_mg": 519.0,
    "sugar_g": 0.91,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 4.7,
    "vitamin_e_mg": 1.48,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708858",
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
