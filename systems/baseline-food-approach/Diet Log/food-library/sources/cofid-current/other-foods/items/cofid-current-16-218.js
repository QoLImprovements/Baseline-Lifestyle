/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples from assorted outlets, purchased whole",
  "id": "cofid-current-16-218",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sprats, raw",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 0.0,
    "energy_kcal": 172.0,
    "fat_g": 11.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.1,
    "magnesium_mg": 37.0,
    "omega3_g": 2.68,
    "phosphorus_mg": 240.0,
    "potassium_mg": 320.0,
    "protein_g": 18.3,
    "salt_g": 0.5,
    "sat_fat_g": 2.2,
    "sodium_mg": 200.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-218",
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
