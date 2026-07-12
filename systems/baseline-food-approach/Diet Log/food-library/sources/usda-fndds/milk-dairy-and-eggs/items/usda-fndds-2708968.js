/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Egg rolls, dumplings, sushi",
  "id": "usda-fndds-2708968",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Sushi, topped with eel",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 13.4,
    "energy_kcal": 126.0,
    "fat_g": 4.16,
    "fibre_g": 0.6,
    "folate_ug": 5.0,
    "iron_mg": 0.26,
    "magnesium_mg": 10.0,
    "omega3_g": 0.077,
    "phosphorus_mg": 80.0,
    "potassium_mg": 100.0,
    "protein_g": 7.6,
    "salt_g": 0.77,
    "sat_fat_g": 0.84,
    "sodium_mg": 308.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 307.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 1.41,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708968",
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
