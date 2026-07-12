/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, imported",
  "id": "cofid-current-14-380",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Nectarines, flesh and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 9.8,
    "energy_kcal": 43.0,
    "fat_g": 0.3,
    "fibre_g": 1.3,
    "folate_ug": 8.0,
    "iron_mg": 0.2,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 257.0,
    "protein_g": 1.0,
    "salt_g": 0.0,
    "sat_fat_g": 0.02,
    "sodium_mg": 0.0,
    "sugar_g": 9.8,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 2.5
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-380",
  "state": "Raw",
  "subcategory": "FA",
  "tags": [
    "fa",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
