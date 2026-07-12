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
  "id": "usda-fndds-2708826",
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
  "name": "Pasta with tomato-based sauce and cheese",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 15.0,
    "energy_kcal": 119.0,
    "fat_g": 4.83,
    "fibre_g": 1.7,
    "folate_ug": 32.0,
    "iron_mg": 0.9,
    "magnesium_mg": 18.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 59.0,
    "potassium_mg": 212.0,
    "protein_g": 3.74,
    "salt_g": 1.0075,
    "sat_fat_g": 1.28,
    "sodium_mg": 403.0,
    "sugar_g": 3.54,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 1.92,
    "vitamin_k_ug": 10.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708826",
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
