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
  "id": "usda-fndds-2708831",
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
  "name": "Pasta with tomato-based sauce, home recipe",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 19.9,
    "energy_kcal": 106.0,
    "fat_g": 1.2,
    "fibre_g": 1.8,
    "folate_ug": 44.0,
    "iron_mg": 1.04,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 176.0,
    "protein_g": 3.69,
    "salt_g": 0.505,
    "sat_fat_g": 0.173,
    "sodium_mg": 202.0,
    "sugar_g": 2.94,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.19,
    "vitamin_k_ug": 6.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708831",
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
