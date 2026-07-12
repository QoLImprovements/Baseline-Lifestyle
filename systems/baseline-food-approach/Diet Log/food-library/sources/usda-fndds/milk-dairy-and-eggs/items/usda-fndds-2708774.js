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
  "id": "usda-fndds-2708774",
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
      "gramsPerUnit": 38.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Ravioli, cheese and spinach filled, with tomato sauce",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 16.8,
    "energy_kcal": 117.0,
    "fat_g": 3.37,
    "fibre_g": 1.2,
    "folate_ug": 41.0,
    "iron_mg": 1.66,
    "magnesium_mg": 27.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 81.0,
    "potassium_mg": 229.0,
    "protein_g": 5.19,
    "salt_g": 1.3375,
    "sat_fat_g": 1.45,
    "sodium_mg": 535.0,
    "sugar_g": 1.33,
    "vitamin_a_ug": 89.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 1.02,
    "vitamin_k_ug": 73.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708774",
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
