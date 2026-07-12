/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "22 samples, early and late winter, including clementines, mandarins, satsumas and tangerines",
  "id": "cofid-current-14-326",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Citrus fruit, soft/easy peelers, flesh only",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 9.6,
    "energy_kcal": 41.0,
    "fat_g": 0.2,
    "fibre_g": 1.5,
    "folate_ug": 19.0,
    "iron_mg": 0.09,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 128.0,
    "protein_g": 0.7,
    "salt_g": 0.0025,
    "sat_fat_g": 0.04,
    "sodium_mg": 1.0,
    "sugar_g": 9.6,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 42.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-326",
  "state": "Unspecified",
  "subcategory": "FA",
  "tags": [
    "fa",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
