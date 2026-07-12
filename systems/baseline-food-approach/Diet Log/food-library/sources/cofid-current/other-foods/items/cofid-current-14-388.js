/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, UK and imported",
  "id": "cofid-current-14-388",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Blackberries, raw",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 5.6,
    "energy_kcal": 27.0,
    "fat_g": 0.2,
    "fibre_g": 3.4,
    "folate_ug": 34.0,
    "iron_mg": 0.31,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 154.0,
    "protein_g": 1.1,
    "salt_g": 0.0025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.0,
    "sugar_g": 5.6,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 2.37,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-388",
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
