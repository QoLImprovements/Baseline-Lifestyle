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
  "id": "usda-fndds-2708859",
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
  "name": "Pasta with cream sauce and added vegetables, from home recipe",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 17.3,
    "energy_kcal": 141.0,
    "fat_g": 6.04,
    "fibre_g": 1.1,
    "folate_ug": 42.0,
    "iron_mg": 0.72,
    "magnesium_mg": 13.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 55.0,
    "potassium_mg": 72.0,
    "protein_g": 4.0,
    "salt_g": 0.51,
    "sat_fat_g": 3.24,
    "sodium_mg": 204.0,
    "sugar_g": 0.99,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 5.1,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708859",
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
