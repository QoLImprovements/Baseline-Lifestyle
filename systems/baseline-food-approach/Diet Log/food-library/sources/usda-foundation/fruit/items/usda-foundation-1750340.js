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
  "id": "usda-foundation-1750340",
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
  "name": "Apples, fuji, with skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.98,
    "carbs_g": 15.7,
    "energy_kcal": 64.7,
    "fat_g": 0.162,
    "fibre_g": 2.08,
    "folate_ug": 0.0,
    "iron_mg": 0.015,
    "magnesium_mg": 4.67,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.78,
    "potassium_mg": 104.0,
    "protein_g": 0.148,
    "salt_g": 0.002525,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.01,
    "sugar_g": 13.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "1750340",
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
