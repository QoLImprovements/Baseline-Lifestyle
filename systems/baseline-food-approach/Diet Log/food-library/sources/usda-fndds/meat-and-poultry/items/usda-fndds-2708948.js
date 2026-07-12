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
  "id": "usda-fndds-2708948",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 204.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Macaroni or pasta salad with meat",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 20.8,
    "energy_kcal": 211.0,
    "fat_g": 10.6,
    "fibre_g": 1.2,
    "folate_ug": 48.0,
    "iron_mg": 1.0,
    "magnesium_mg": 15.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 75.0,
    "potassium_mg": 90.0,
    "protein_g": 7.65,
    "salt_g": 0.945,
    "sat_fat_g": 1.83,
    "sodium_mg": 378.0,
    "sugar_g": 1.56,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 23.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708948",
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
