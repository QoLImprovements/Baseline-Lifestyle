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
  "id": "usda-fndds-2708916",
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
  "name": "Pasta, whole grain, with cream sauce and poultry, home recipe",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 16.3,
    "energy_kcal": 152.0,
    "fat_g": 7.44,
    "fibre_g": 2.0,
    "folate_ug": 12.0,
    "iron_mg": 0.99,
    "magnesium_mg": 32.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 108.0,
    "potassium_mg": 92.0,
    "protein_g": 6.42,
    "salt_g": 0.6275,
    "sat_fat_g": 3.63,
    "sodium_mg": 251.0,
    "sugar_g": 0.74,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708916",
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
