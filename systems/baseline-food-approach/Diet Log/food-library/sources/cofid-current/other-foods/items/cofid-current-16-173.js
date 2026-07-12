/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Analytical and literature sources",
  "id": "cofid-current-16-173",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Eel, yellow, raw",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 0.0,
    "energy_kcal": 168.0,
    "fat_g": 11.3,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 1.2,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 310.0,
    "potassium_mg": 270.0,
    "protein_g": 16.6,
    "salt_g": 0.2225,
    "sat_fat_g": 2.9,
    "sodium_mg": 89.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1200.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-173",
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
