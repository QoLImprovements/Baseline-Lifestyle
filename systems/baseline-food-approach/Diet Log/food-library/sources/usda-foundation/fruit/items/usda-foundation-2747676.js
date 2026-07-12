/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Fruits and Fruit Juices",
  "id": "usda-foundation-2747676",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Watermelon, seedless, rind only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 16.9,
    "carbs_g": 4.17,
    "energy_kcal": 19.4,
    "fat_g": 0.07,
    "fibre_g": 1.54,
    "folate_ug": 29.7,
    "iron_mg": 0.0,
    "magnesium_mg": 9.67,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.7,
    "potassium_mg": 272.0,
    "protein_g": 0.531,
    "salt_g": 0.0094,
    "sat_fat_g": 0.0,
    "sodium_mg": 3.76,
    "sugar_g": 2.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.09,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2747676",
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
