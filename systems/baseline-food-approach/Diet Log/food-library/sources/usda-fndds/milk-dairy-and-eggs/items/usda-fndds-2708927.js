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
  "id": "usda-fndds-2708927",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pasta with tomato-based sauce and beans or lentils",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 20.9,
    "energy_kcal": 125.0,
    "fat_g": 2.28,
    "fibre_g": 3.0,
    "folate_ug": 53.0,
    "iron_mg": 1.73,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 275.0,
    "protein_g": 5.23,
    "salt_g": 0.625,
    "sat_fat_g": 0.326,
    "sodium_mg": 250.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 1.36,
    "vitamin_k_ug": 7.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708927",
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
