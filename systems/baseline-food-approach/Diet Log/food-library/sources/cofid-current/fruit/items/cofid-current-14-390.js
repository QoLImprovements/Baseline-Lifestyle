/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "11 samples, imported, ripe",
  "id": "cofid-current-14-390",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Papaya, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 9.5,
    "energy_kcal": 44.0,
    "fat_g": 0.6,
    "fibre_g": 1.8,
    "folate_ug": 1.0,
    "iron_mg": 0.22,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 215.0,
    "protein_g": 0.7,
    "salt_g": 0.035,
    "sat_fat_g": 0.19,
    "sodium_mg": 14.0,
    "sugar_g": 9.5,
    "vitamin_a_ug": 78.0,
    "vitamin_c_mg": 68.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-390",
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
