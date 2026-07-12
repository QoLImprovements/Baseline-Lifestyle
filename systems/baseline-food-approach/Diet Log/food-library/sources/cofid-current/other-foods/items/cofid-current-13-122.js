/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Whole pods, ends trimmed; 10 samples",
  "id": "cofid-current-13-122",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peas, mange-tout, raw",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 4.2,
    "energy_kcal": 32.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.8,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 200.0,
    "protein_g": 3.6,
    "salt_g": 0.005,
    "sat_fat_g": 0.0,
    "sodium_mg": 2.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 115.0,
    "vitamin_c_mg": 54.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-122",
  "state": "Raw",
  "subcategory": "DF",
  "tags": [
    "df",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
