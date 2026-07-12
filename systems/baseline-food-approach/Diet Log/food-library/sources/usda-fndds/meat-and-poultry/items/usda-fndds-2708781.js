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
  "id": "usda-fndds-2708781",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-shell-jumbo",
      "kind": "unit",
      "label": "1 shell (jumbo)"
    }
  ],
  "name": "Stuffed shells, cheese-filled, with meat sauce",
  "nutritionPerBasis": {
    "calcium_mg": 116.0,
    "carbs_g": 16.6,
    "energy_kcal": 158.0,
    "fat_g": 6.54,
    "fibre_g": 1.0,
    "folate_ug": 26.0,
    "iron_mg": 1.72,
    "magnesium_mg": 20.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 132.0,
    "potassium_mg": 238.0,
    "protein_g": 8.46,
    "salt_g": 0.75,
    "sat_fat_g": 3.24,
    "sodium_mg": 300.0,
    "sugar_g": 1.97,
    "vitamin_a_ug": 67.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708781",
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
