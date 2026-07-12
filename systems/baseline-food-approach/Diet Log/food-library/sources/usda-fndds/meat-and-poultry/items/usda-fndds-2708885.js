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
  "id": "usda-fndds-2708885",
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
  "name": "Pasta, whole grain, with tomato-based sauce and meat, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 17.4,
    "energy_kcal": 174.0,
    "fat_g": 9.62,
    "fibre_g": 2.5,
    "folate_ug": 16.0,
    "iron_mg": 1.33,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 187.0,
    "protein_g": 5.52,
    "salt_g": 0.9625,
    "sat_fat_g": 1.64,
    "sodium_mg": 385.0,
    "sugar_g": 2.35,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 2.29,
    "vitamin_k_ug": 12.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708885",
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
