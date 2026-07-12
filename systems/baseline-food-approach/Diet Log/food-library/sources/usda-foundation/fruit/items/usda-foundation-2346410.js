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
  "id": "usda-foundation-2346410",
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
  "name": "Raspberries, raw",
  "nutritionPerBasis": {
    "calcium_mg": 16.4,
    "carbs_g": 12.9,
    "energy_kcal": 57.3,
    "fat_g": 0.188,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.45,
    "magnesium_mg": 19.2,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.5,
    "potassium_mg": 156.0,
    "protein_g": 1.01,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 2.68,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 23.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2346410",
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
