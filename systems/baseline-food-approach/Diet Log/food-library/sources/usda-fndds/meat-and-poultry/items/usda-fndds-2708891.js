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
  "id": "usda-fndds-2708891",
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
  "name": "Pasta, whole grain, with tomato-based sauce and poultry, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 17.4,
    "energy_kcal": 167.0,
    "fat_g": 8.85,
    "fibre_g": 2.5,
    "folate_ug": 16.0,
    "iron_mg": 1.2,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 186.0,
    "protein_g": 5.68,
    "salt_g": 0.96,
    "sat_fat_g": 1.26,
    "sodium_mg": 384.0,
    "sugar_g": 2.35,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 2.3,
    "vitamin_k_ug": 12.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708891",
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
