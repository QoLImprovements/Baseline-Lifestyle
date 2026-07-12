/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-14-118",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Guava, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 5.0,
    "energy_kcal": 26.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.4,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 230.0,
    "protein_g": 0.8,
    "salt_g": 0.0125,
    "sat_fat_g": 0.0,
    "sodium_mg": 5.0,
    "sugar_g": 4.9,
    "vitamin_a_ug": 73.0,
    "vitamin_c_mg": 230.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-118",
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
