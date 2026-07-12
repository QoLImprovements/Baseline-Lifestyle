/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "racc",
  "description": "Fruits and Fruit Juices",
  "id": "usda-foundation-2346413",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Grapes, green, seedless, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.9,
    "carbs_g": 18.6,
    "energy_kcal": 80.1,
    "fat_g": 0.232,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.199,
    "magnesium_mg": 7.12,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 218.0,
    "protein_g": 0.899,
    "salt_g": 0.007925,
    "sat_fat_g": 0.0,
    "sodium_mg": 3.17,
    "sugar_g": 16.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.02,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2346413",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
