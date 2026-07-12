/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-14-060",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cashew fruit, flesh only",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 6.8,
    "energy_kcal": 33.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.8,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 120.0,
    "protein_g": 0.9,
    "salt_g": 0.0175,
    "sat_fat_g": 0.0,
    "sodium_mg": 7.0,
    "sugar_g": 6.8,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 220.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-060",
  "state": "Unspecified",
  "subcategory": "FA",
  "tags": [
    "fa",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
