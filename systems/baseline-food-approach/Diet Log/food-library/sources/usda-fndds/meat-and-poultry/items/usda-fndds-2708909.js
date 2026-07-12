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
  "id": "usda-fndds-2708909",
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
  "name": "Pasta, whole grain, with cream sauce and meat, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 15.0,
    "energy_kcal": 209.0,
    "fat_g": 14.5,
    "fibre_g": 1.9,
    "folate_ug": 11.0,
    "iron_mg": 1.05,
    "magnesium_mg": 29.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 95.0,
    "potassium_mg": 85.0,
    "protein_g": 5.76,
    "salt_g": 1.41,
    "sat_fat_g": 4.65,
    "sodium_mg": 564.0,
    "sugar_g": 0.68,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.53,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708909",
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
