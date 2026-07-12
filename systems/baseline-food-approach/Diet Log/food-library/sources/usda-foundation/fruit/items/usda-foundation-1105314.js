/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "peeled",
  "description": "Fruits and Fruit Juices",
  "id": "usda-foundation-1105314",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "peeled",
      "kind": "unit",
      "label": "Peeled"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Bananas, ripe and slightly ripe, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 23.0,
    "energy_kcal": 408.0,
    "fat_g": 0.29,
    "fibre_g": 1.7,
    "folate_ug": 14.0,
    "iron_mg": 0.0,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 326.0,
    "protein_g": 0.74,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 15.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 12.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "1105314",
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
