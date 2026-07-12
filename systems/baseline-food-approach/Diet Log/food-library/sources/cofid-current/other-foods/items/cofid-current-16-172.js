/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-16-172",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Carp, raw",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 0.0,
    "energy_kcal": 112.0,
    "fat_g": 4.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.9,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 240.0,
    "potassium_mg": 360.0,
    "protein_g": 17.5,
    "salt_g": 0.1075,
    "sat_fat_g": 0.9,
    "sodium_mg": 43.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-172",
  "state": "Raw",
  "subcategory": "JA",
  "tags": [
    "ja",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
