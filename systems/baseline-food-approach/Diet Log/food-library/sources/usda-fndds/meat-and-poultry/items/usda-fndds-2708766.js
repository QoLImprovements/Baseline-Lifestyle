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
  "id": "usda-fndds-2708766",
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
      "gramsPerUnit": 35.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Ravioli, meat-filled, with cream sauce",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 13.7,
    "energy_kcal": 176.0,
    "fat_g": 8.8,
    "fibre_g": 0.4,
    "folate_ug": 26.0,
    "iron_mg": 1.63,
    "magnesium_mg": 14.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 118.0,
    "potassium_mg": 155.0,
    "protein_g": 10.2,
    "salt_g": 1.44,
    "sat_fat_g": 2.86,
    "sodium_mg": 576.0,
    "sugar_g": 1.58,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708766",
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
