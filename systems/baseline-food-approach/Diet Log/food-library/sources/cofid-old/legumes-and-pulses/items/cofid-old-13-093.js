/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "10 samples, 2 brands",
  "id": "cofid-old-13-093",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lentils, canned in tomato sauce, re-heated",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 9.3,
    "energy_kcal": 55.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 2.1,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 190.0,
    "protein_g": 4.7,
    "salt_g": 0.75,
    "sat_fat_g": 0.0,
    "sodium_mg": 300.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-093",
  "state": "Canned",
  "subcategory": "DB",
  "tags": [
    "canned",
    "db",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
