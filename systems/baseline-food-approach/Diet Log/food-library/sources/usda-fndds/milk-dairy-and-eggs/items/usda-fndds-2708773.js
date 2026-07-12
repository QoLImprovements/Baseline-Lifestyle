/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-piece",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708773",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
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
  "name": "Ravioli, cheese and spinach-filled, with cream sauce",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 15.7,
    "energy_kcal": 145.0,
    "fat_g": 6.74,
    "fibre_g": 0.7,
    "folate_ug": 37.0,
    "iron_mg": 1.26,
    "magnesium_mg": 25.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 100.0,
    "potassium_mg": 176.0,
    "protein_g": 5.56,
    "salt_g": 0.995,
    "sat_fat_g": 2.31,
    "sodium_mg": 398.0,
    "sugar_g": 1.75,
    "vitamin_a_ug": 126.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 71.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708773",
  "state": "Unspecified",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "milk-dairy-and-eggs",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
