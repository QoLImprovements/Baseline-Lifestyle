/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-miniature-roll",
  "description": "Egg rolls, dumplings, sushi",
  "id": "usda-fndds-2708702",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-miniature-roll",
      "kind": "unit",
      "label": "1 miniature roll"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "1-egg-roll",
      "kind": "unit",
      "label": "1 egg roll"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Egg roll, with beef and/or pork",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 27.0,
    "energy_kcal": 272.0,
    "fat_g": 14.7,
    "fibre_g": 2.0,
    "folate_ug": 60.0,
    "iron_mg": 1.84,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 221.0,
    "protein_g": 7.58,
    "salt_g": 1.1175,
    "sat_fat_g": 2.44,
    "sodium_mg": 447.0,
    "sugar_g": 5.07,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 2.08,
    "vitamin_k_ug": 41.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708702",
  "state": "Unspecified",
  "subcategory": "Egg rolls, dumplings, sushi",
  "tags": [
    "egg-rolls-dumplings-sushi",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
