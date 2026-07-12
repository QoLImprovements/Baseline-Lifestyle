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
  "id": "usda-fndds-2708772",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Ravioli, cheese and spinach-filled, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 20.8,
    "energy_kcal": 150.0,
    "fat_g": 4.51,
    "fibre_g": 1.0,
    "folate_ug": 54.0,
    "iron_mg": 1.86,
    "magnesium_mg": 31.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 99.0,
    "potassium_mg": 185.0,
    "protein_g": 6.62,
    "salt_g": 1.32,
    "sat_fat_g": 1.98,
    "sodium_mg": 528.0,
    "sugar_g": 0.26,
    "vitamin_a_ug": 113.0,
    "vitamin_c_mg": 4.4,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 100.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708772",
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
