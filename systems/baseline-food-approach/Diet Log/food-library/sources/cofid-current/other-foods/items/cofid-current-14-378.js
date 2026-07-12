/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, imported, whole and prepacked chunks",
  "id": "cofid-current-14-378",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mangoes, ripe, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 10.7,
    "energy_kcal": 48.0,
    "fat_g": 0.6,
    "fibre_g": 1.1,
    "folate_ug": 24.0,
    "iron_mg": 0.12,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 150.0,
    "protein_g": 0.7,
    "salt_g": 0.01,
    "sat_fat_g": 0.15,
    "sodium_mg": 4.0,
    "sugar_g": 10.4,
    "vitamin_a_ug": 116.0,
    "vitamin_c_mg": 26.0,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 0.52
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-378",
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
