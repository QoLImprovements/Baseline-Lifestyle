/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Literature sources. Imported frozen from Bangladesh",
  "id": "cofid-current-16-184",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Hilsa, raw",
  "nutritionPerBasis": {
    "calcium_mg": 180.0,
    "carbs_g": 0.0,
    "energy_kcal": 262.0,
    "fat_g": 19.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.1,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 280.0,
    "potassium_mg": 180.0,
    "protein_g": 21.8,
    "salt_g": 0.13,
    "sat_fat_g": 0.0,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-184",
  "state": "Raw",
  "subcategory": "JC",
  "tags": [
    "jc",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
