/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Analysis and literature sources",
  "id": "cofid-current-13-062",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, blackeye, whole, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 81.0,
    "carbs_g": 54.1,
    "energy_kcal": 311.0,
    "fat_g": 1.6,
    "fibre_g": 0.0,
    "folate_ug": 630.0,
    "iron_mg": 7.6,
    "magnesium_mg": 140.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 410.0,
    "potassium_mg": 1170.0,
    "protein_g": 23.5,
    "salt_g": 0.04,
    "sat_fat_g": 0.5,
    "sodium_mg": 16.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-062",
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
