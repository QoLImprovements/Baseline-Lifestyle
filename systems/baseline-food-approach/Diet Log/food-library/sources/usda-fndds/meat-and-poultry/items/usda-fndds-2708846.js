/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708846",
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
  "name": "Pasta with tomato-based sauce, poultry, and added vegetables, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 17.5,
    "energy_kcal": 169.0,
    "fat_g": 8.37,
    "fibre_g": 1.5,
    "folate_ug": 42.0,
    "iron_mg": 0.96,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 160.0,
    "protein_g": 5.63,
    "salt_g": 0.8675,
    "sat_fat_g": 1.21,
    "sodium_mg": 347.0,
    "sugar_g": 2.07,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 4.4,
    "vitamin_e_mg": 2.06,
    "vitamin_k_ug": 11.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708846",
  "state": "Unspecified",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "meat-and-poultry",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
