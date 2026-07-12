/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Analysis and literature sources",
  "id": "cofid-current-14-092",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Figs, whole fruit, dried",
  "nutritionPerBasis": {
    "calcium_mg": 250.0,
    "carbs_g": 52.9,
    "energy_kcal": 227.0,
    "fat_g": 1.6,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 4.2,
    "magnesium_mg": 80.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 970.0,
    "protein_g": 3.6,
    "salt_g": 0.155,
    "sat_fat_g": 0.0,
    "sodium_mg": 62.0,
    "sugar_g": 52.9,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-092",
  "state": "Dried",
  "subcategory": "FA",
  "tags": [
    "dried",
    "fa",
    "fruit"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
