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
  "id": "usda-foundation-2346409",
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
  "name": "Strawberries, raw",
  "nutritionPerBasis": {
    "calcium_mg": 16.9,
    "carbs_g": 7.96,
    "energy_kcal": 36.4,
    "fat_g": 0.22,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.255,
    "magnesium_mg": 12.5,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 161.0,
    "protein_g": 0.641,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 4.86,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 59.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2346409",
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
