/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-piece",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708763",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Ravioli, meat-filled, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 17.7,
    "energy_kcal": 190.0,
    "fat_g": 7.42,
    "fibre_g": 0.6,
    "folate_ug": 38.0,
    "iron_mg": 2.29,
    "magnesium_mg": 15.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 121.0,
    "potassium_mg": 148.0,
    "protein_g": 12.6,
    "salt_g": 1.925,
    "sat_fat_g": 2.7,
    "sodium_mg": 770.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708763",
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
