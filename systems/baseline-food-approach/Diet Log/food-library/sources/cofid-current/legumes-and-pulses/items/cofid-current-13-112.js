/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Ends and sides trimmed",
  "id": "cofid-current-13-112",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, runner, raw",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 3.2,
    "energy_kcal": 22.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 60.0,
    "iron_mg": 1.2,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 220.0,
    "protein_g": 1.6,
    "salt_g": 0.0,
    "sat_fat_g": 0.1,
    "sodium_mg": 0.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 18.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 26.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-112",
  "state": "Raw",
  "subcategory": "DB",
  "tags": [
    "db",
    "legumes-and-pulses",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
