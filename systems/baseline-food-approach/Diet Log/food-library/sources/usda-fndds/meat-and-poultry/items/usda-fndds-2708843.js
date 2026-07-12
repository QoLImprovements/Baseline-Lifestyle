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
  "id": "usda-fndds-2708843",
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
  "name": "Pasta with tomato-based sauce and poultry, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 17.7,
    "energy_kcal": 171.0,
    "fat_g": 8.47,
    "fibre_g": 1.5,
    "folate_ug": 41.0,
    "iron_mg": 0.99,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 161.0,
    "protein_g": 5.59,
    "salt_g": 0.955,
    "sat_fat_g": 1.22,
    "sodium_mg": 382.0,
    "sugar_g": 2.26,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 2.22,
    "vitamin_k_ug": 11.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708843",
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
