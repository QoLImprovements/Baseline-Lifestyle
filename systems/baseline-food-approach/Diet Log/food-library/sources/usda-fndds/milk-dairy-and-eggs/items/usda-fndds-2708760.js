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
  "id": "usda-fndds-2708760",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Ravioli, NS as to filling, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 19.9,
    "energy_kcal": 185.0,
    "fat_g": 6.97,
    "fibre_g": 0.7,
    "folate_ug": 38.0,
    "iron_mg": 2.04,
    "magnesium_mg": 15.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 122.0,
    "potassium_mg": 142.0,
    "protein_g": 10.3,
    "salt_g": 0.71,
    "sat_fat_g": 2.95,
    "sodium_mg": 284.0,
    "sugar_g": 0.21,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708760",
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
