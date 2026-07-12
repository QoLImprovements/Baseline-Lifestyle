/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708915",
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
  "name": "Pasta, whole grain, with cream sauce and poultry, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 15.0,
    "energy_kcal": 202.0,
    "fat_g": 13.7,
    "fibre_g": 1.9,
    "folate_ug": 11.0,
    "iron_mg": 0.93,
    "magnesium_mg": 30.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 100.0,
    "potassium_mg": 85.0,
    "protein_g": 5.92,
    "salt_g": 1.4075,
    "sat_fat_g": 4.27,
    "sodium_mg": 563.0,
    "sugar_g": 0.68,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.54,
    "vitamin_k_ug": 7.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708915",
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
