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
  "id": "usda-fndds-2708812",
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
  "name": "Macaroni or noodles with cheese, from restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 18.8,
    "energy_kcal": 151.0,
    "fat_g": 6.06,
    "fibre_g": 1.1,
    "folate_ug": 34.0,
    "iron_mg": 0.68,
    "magnesium_mg": 19.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 137.0,
    "potassium_mg": 135.0,
    "protein_g": 5.42,
    "salt_g": 0.9025,
    "sat_fat_g": 2.15,
    "sodium_mg": 361.0,
    "sugar_g": 3.09,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708812",
  "state": "Unspecified",
  "subcategory": "Macaroni and cheese",
  "tags": [
    "macaroni-and-cheese",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
