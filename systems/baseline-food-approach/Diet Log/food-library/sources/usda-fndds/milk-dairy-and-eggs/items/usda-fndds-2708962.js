/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Egg rolls, dumplings, sushi",
  "id": "usda-fndds-2708962",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Sushi roll, eel",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 15.3,
    "energy_kcal": 116.0,
    "fat_g": 2.98,
    "fibre_g": 0.7,
    "folate_ug": 6.0,
    "iron_mg": 0.24,
    "magnesium_mg": 8.0,
    "omega3_g": 0.054,
    "phosphorus_mg": 59.0,
    "potassium_mg": 78.0,
    "protein_g": 5.95,
    "salt_g": 0.8575,
    "sat_fat_g": 0.603,
    "sodium_mg": 343.0,
    "sugar_g": 0.92,
    "vitamin_a_ug": 220.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 1.02,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708962",
  "state": "Unspecified",
  "subcategory": "Egg rolls, dumplings, sushi",
  "tags": [
    "egg-rolls-dumplings-sushi",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
