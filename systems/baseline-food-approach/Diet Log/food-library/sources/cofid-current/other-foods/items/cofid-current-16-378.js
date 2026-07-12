/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "9 samples, 8 products, frozen and chilled",
  "id": "cofid-current-16-378",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pollock, Alaskan, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 72.0,
    "fat_g": 0.7,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.18,
    "magnesium_mg": 30.0,
    "omega3_g": 0.14,
    "phosphorus_mg": 120.0,
    "potassium_mg": 216.0,
    "protein_g": 16.4,
    "salt_g": 0.17,
    "sat_fat_g": 0.14,
    "sodium_mg": 68.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-378",
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
