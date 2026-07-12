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
  "id": "usda-fndds-2708961",
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
  "name": "Sushi roll, California",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 18.4,
    "energy_kcal": 94.0,
    "fat_g": 0.67,
    "fibre_g": 1.0,
    "folate_ug": 5.0,
    "iron_mg": 0.21,
    "magnesium_mg": 13.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 60.0,
    "potassium_mg": 48.0,
    "protein_g": 2.92,
    "salt_g": 1.07,
    "sat_fat_g": 0.133,
    "sodium_mg": 428.0,
    "sugar_g": 2.13,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708961",
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
