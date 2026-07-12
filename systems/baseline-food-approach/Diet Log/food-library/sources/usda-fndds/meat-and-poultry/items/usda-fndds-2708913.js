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
  "id": "usda-fndds-2708913",
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
  "name": "Pasta, whole grain, with cream sauce, meat, and added vegetables, home recipe",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 16.6,
    "energy_kcal": 149.0,
    "fat_g": 6.92,
    "fibre_g": 2.2,
    "folate_ug": 15.0,
    "iron_mg": 1.16,
    "magnesium_mg": 32.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 103.0,
    "potassium_mg": 117.0,
    "protein_g": 6.22,
    "salt_g": 0.505,
    "sat_fat_g": 3.26,
    "sodium_mg": 202.0,
    "sugar_g": 0.95,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708913",
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
