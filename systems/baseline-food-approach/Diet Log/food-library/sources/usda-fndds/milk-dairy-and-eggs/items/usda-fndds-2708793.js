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
  "id": "usda-fndds-2708793",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Tortellini, spinach-filled, with tomato sauce",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 16.1,
    "energy_kcal": 121.0,
    "fat_g": 4.36,
    "fibre_g": 1.2,
    "folate_ug": 59.0,
    "iron_mg": 1.22,
    "magnesium_mg": 26.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 77.0,
    "potassium_mg": 145.0,
    "protein_g": 4.49,
    "salt_g": 1.49,
    "sat_fat_g": 1.19,
    "sodium_mg": 596.0,
    "sugar_g": 1.31,
    "vitamin_a_ug": 67.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 53.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708793",
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
