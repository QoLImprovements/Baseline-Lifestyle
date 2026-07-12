/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Base trimmed, outer leaves removed",
  "id": "cofid-current-13-177",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Brussels sprouts, raw",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 4.1,
    "energy_kcal": 42.0,
    "fat_g": 1.4,
    "fibre_g": 0.0,
    "folate_ug": 135.0,
    "iron_mg": 0.7,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 77.0,
    "potassium_mg": 450.0,
    "protein_g": 3.5,
    "salt_g": 0.015,
    "sat_fat_g": 0.3,
    "sodium_mg": 6.0,
    "sugar_g": 3.1,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 115.0,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 153.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-177",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
