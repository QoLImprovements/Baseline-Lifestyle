/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Analysis and literature sources;",
  "id": "cofid-current-14-178",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Passion fruit, flesh and pips",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 5.8,
    "energy_kcal": 36.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.3,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 200.0,
    "protein_g": 2.6,
    "salt_g": 0.0475,
    "sat_fat_g": 0.1,
    "sodium_mg": 19.0,
    "sugar_g": 5.8,
    "vitamin_a_ug": 125.0,
    "vitamin_c_mg": 23.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-178",
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
