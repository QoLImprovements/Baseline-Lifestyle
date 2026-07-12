/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Macaroni and cheese",
  "id": "usda-fndds-2708814",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Macaroni or noodles with cheese, canned",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 11.5,
    "energy_kcal": 82.0,
    "fat_g": 2.46,
    "fibre_g": 0.5,
    "folate_ug": 13.0,
    "iron_mg": 0.9,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 84.0,
    "protein_g": 3.38,
    "salt_g": 0.755,
    "sat_fat_g": 0.881,
    "sodium_mg": 302.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708814",
  "state": "Canned",
  "subcategory": "Macaroni and cheese",
  "tags": [
    "canned",
    "macaroni-and-cheese",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
