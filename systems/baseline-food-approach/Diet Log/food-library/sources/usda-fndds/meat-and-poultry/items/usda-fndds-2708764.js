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
  "id": "usda-fndds-2708764",
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
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Ravioli, meat-filled, with tomato sauce or meat sauce",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 14.5,
    "energy_kcal": 148.0,
    "fat_g": 6.25,
    "fibre_g": 1.0,
    "folate_ug": 27.0,
    "iron_mg": 2.01,
    "magnesium_mg": 16.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 91.0,
    "potassium_mg": 217.0,
    "protein_g": 8.74,
    "salt_g": 1.4825,
    "sat_fat_g": 2.03,
    "sodium_mg": 593.0,
    "sugar_g": 1.73,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708764",
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
