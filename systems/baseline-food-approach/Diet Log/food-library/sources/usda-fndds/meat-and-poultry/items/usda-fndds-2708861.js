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
  "id": "usda-fndds-2708861",
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
  "name": "Pasta with cream sauce and meat, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 15.4,
    "energy_kcal": 213.0,
    "fat_g": 14.1,
    "fibre_g": 0.9,
    "folate_ug": 36.0,
    "iron_mg": 0.84,
    "magnesium_mg": 12.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 62.0,
    "potassium_mg": 60.0,
    "protein_g": 5.67,
    "salt_g": 1.405,
    "sat_fat_g": 4.61,
    "sodium_mg": 562.0,
    "sugar_g": 0.59,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.45,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708861",
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
