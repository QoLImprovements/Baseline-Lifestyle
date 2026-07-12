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
  "id": "usda-fndds-2708838",
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
  "name": "Pasta with tomato-based sauce and meat, home recipe",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 19.2,
    "energy_kcal": 125.0,
    "fat_g": 2.58,
    "fibre_g": 1.6,
    "folate_ug": 44.0,
    "iron_mg": 1.19,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 175.0,
    "protein_g": 5.86,
    "salt_g": 0.4975,
    "sat_fat_g": 0.74,
    "sodium_mg": 199.0,
    "sugar_g": 2.44,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 5.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708838",
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
