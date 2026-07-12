/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples, 3 brands and calculation from 14-014",
  "id": "cofid-current-14-016",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Apples, eating, dried",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 60.1,
    "energy_kcal": 238.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.5,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 540.0,
    "protein_g": 2.0,
    "salt_g": 0.04,
    "sat_fat_g": 0.1,
    "sodium_mg": 16.0,
    "sugar_g": 60.1,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.45,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-016",
  "state": "Dried",
  "subcategory": "FA",
  "tags": [
    "dried",
    "fa",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
