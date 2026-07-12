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
  "id": "cofid-current-13-070",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, butter, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 52.9,
    "energy_kcal": 290.0,
    "fat_g": 1.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 5.9,
    "magnesium_mg": 190.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 320.0,
    "potassium_mg": 1700.0,
    "protein_g": 19.1,
    "salt_g": 0.1,
    "sat_fat_g": 0.4,
    "sodium_mg": 40.0,
    "sugar_g": 3.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.13,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-070",
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
