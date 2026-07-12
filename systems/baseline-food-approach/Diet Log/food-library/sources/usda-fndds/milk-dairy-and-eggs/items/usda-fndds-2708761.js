/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708761",
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
    }
  ],
  "name": "Ravioli, NS as to filling, with tomato sauce",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 14.6,
    "energy_kcal": 138.0,
    "fat_g": 5.9,
    "fibre_g": 0.9,
    "folate_ug": 27.0,
    "iron_mg": 1.6,
    "magnesium_mg": 14.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 86.0,
    "potassium_mg": 176.0,
    "protein_g": 6.92,
    "salt_g": 0.9825,
    "sat_fat_g": 2.15,
    "sodium_mg": 393.0,
    "sugar_g": 1.46,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708761",
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
