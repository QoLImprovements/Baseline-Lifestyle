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
  "id": "usda-fndds-2708879",
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
  "name": "Pasta, whole grain, with tomato-based sauce, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 18.0,
    "energy_kcal": 156.0,
    "fat_g": 8.34,
    "fibre_g": 2.7,
    "folate_ug": 16.0,
    "iron_mg": 1.18,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 188.0,
    "protein_g": 3.51,
    "salt_g": 0.97,
    "sat_fat_g": 1.11,
    "sodium_mg": 388.0,
    "sugar_g": 2.81,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 2.48,
    "vitamin_k_ug": 13.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708879",
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
