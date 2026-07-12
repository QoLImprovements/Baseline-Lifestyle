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
  "id": "usda-fndds-2708865",
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
  "name": "Pasta with cream sauce, meat, and added vegetables, home recipe",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 17.0,
    "energy_kcal": 153.0,
    "fat_g": 6.52,
    "fibre_g": 1.1,
    "folate_ug": 42.0,
    "iron_mg": 0.93,
    "magnesium_mg": 14.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 68.0,
    "potassium_mg": 90.0,
    "protein_g": 6.12,
    "salt_g": 0.5,
    "sat_fat_g": 3.23,
    "sodium_mg": 200.0,
    "sugar_g": 0.86,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708865",
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
