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
  "id": "usda-fndds-2708966",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Sushi roll, vegetable",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 17.6,
    "energy_kcal": 93.0,
    "fat_g": 1.47,
    "fibre_g": 1.4,
    "folate_ug": 11.0,
    "iron_mg": 0.18,
    "magnesium_mg": 7.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 14.0,
    "potassium_mg": 71.0,
    "protein_g": 1.8,
    "salt_g": 0.9025,
    "sat_fat_g": 0.223,
    "sodium_mg": 361.0,
    "sugar_g": 1.21,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708966",
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
