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
  "id": "usda-foundation-2710831",
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
  "name": "Kiwifruit (kiwi), green, peeled, raw",
  "nutritionPerBasis": {
    "calcium_mg": 24.4,
    "carbs_g": 13.8,
    "energy_kcal": 65.1,
    "fat_g": 0.64,
    "fibre_g": 2.13,
    "folate_ug": 32.8,
    "iron_mg": 0.037,
    "magnesium_mg": 14.8,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.6,
    "potassium_mg": 302.0,
    "protein_g": 1.01,
    "salt_g": 0.0057,
    "sat_fat_g": 0.0,
    "sodium_mg": 2.28,
    "sugar_g": 8.56,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 58.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2710831",
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
