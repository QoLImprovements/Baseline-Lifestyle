/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-piece",
  "description": "Egg rolls, dumplings, sushi",
  "id": "usda-fndds-2708972",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Sushi, topped with egg",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 10.2,
    "energy_kcal": 119.0,
    "fat_g": 5.23,
    "fibre_g": 0.4,
    "folate_ug": 29.0,
    "iron_mg": 0.94,
    "magnesium_mg": 8.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 99.0,
    "potassium_mg": 75.0,
    "protein_g": 7.32,
    "salt_g": 0.845,
    "sat_fat_g": 1.67,
    "sodium_mg": 338.0,
    "sugar_g": 0.69,
    "vitamin_a_ug": 95.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708972",
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
