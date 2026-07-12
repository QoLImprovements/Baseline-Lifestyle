/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products, as purchased",
  "id": "cofid-current-13-657",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lentils, red, split, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 51.2,
    "energy_kcal": 311.0,
    "fat_g": 1.8,
    "fibre_g": 17.4,
    "folate_ug": 164.0,
    "iron_mg": 7.0,
    "magnesium_mg": 59.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 349.0,
    "potassium_mg": 717.0,
    "protein_g": 25.6,
    "salt_g": 0.0,
    "sat_fat_g": 0.28,
    "sodium_mg": 0.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.11,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-657",
  "state": "Dried",
  "subcategory": "DB",
  "tags": [
    "db",
    "dried",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
