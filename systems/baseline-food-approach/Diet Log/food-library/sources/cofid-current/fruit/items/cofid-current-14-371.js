/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "11 samples, imported. Including flesh and seeds",
  "id": "cofid-current-14-371",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Kiwi fruit, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 8.6,
    "energy_kcal": 44.0,
    "fat_g": 0.9,
    "fibre_g": 2.7,
    "folate_ug": 33.0,
    "iron_mg": 0.22,
    "magnesium_mg": 13.0,
    "omega3_g": 0.4,
    "phosphorus_mg": 33.0,
    "potassium_mg": 289.0,
    "protein_g": 0.8,
    "salt_g": 0.0025,
    "sat_fat_g": 0.07,
    "sodium_mg": 1.0,
    "sugar_g": 8.3,
    "vitamin_a_ug": 6.666667,
    "vitamin_c_mg": 71.0,
    "vitamin_e_mg": 2.17,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-371",
  "state": "Raw",
  "subcategory": "FA",
  "tags": [
    "fa",
    "fruit",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
