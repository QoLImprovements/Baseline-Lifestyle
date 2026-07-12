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
  "id": "usda-foundation-2710836",
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
  "name": "Pear, Anjou, green, with skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.99,
    "carbs_g": 14.8,
    "energy_kcal": 63.7,
    "fat_g": 0.371,
    "fibre_g": 2.64,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 6.49,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.3,
    "potassium_mg": 122.0,
    "protein_g": 0.312,
    "salt_g": 0.000995,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.398,
    "sugar_g": 7.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.51,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2710836",
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
