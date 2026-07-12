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
  "id": "usda-fndds-2708932",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 204.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Macaroni or pasta salad, made with mayonnaise",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 24.6,
    "energy_kcal": 221.0,
    "fat_g": 11.5,
    "fibre_g": 1.4,
    "folate_ug": 56.0,
    "iron_mg": 1.01,
    "magnesium_mg": 14.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 47.0,
    "potassium_mg": 49.0,
    "protein_g": 4.46,
    "salt_g": 0.51,
    "sat_fat_g": 1.82,
    "sodium_mg": 204.0,
    "sugar_g": 1.85,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 27.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708932",
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
