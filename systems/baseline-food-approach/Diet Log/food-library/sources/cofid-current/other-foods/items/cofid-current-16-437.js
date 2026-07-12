/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 16-378 using 40% weight loss",
  "id": "cofid-current-16-437",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pollock, Alaskan, flesh only, steamed",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 0.0,
    "energy_kcal": 120.0,
    "fat_g": 1.2,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.3,
    "magnesium_mg": 49.0,
    "omega3_g": 0.24,
    "phosphorus_mg": 201.0,
    "potassium_mg": 360.0,
    "protein_g": 27.4,
    "salt_g": 0.285,
    "sat_fat_g": 0.23,
    "sodium_mg": 114.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-437",
  "state": "Steamed",
  "subcategory": "JA",
  "tags": [
    "ja",
    "other-foods",
    "steamed"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
