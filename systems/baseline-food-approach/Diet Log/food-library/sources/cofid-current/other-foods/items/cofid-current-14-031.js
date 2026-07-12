/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "No stones",
  "id": "cofid-current-14-031",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Apricots, dried",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 43.4,
    "energy_kcal": 188.0,
    "fat_g": 0.7,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 4.1,
    "magnesium_mg": 65.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 1880.0,
    "protein_g": 4.8,
    "salt_g": 0.14,
    "sat_fat_g": 0.0,
    "sodium_mg": 56.0,
    "sugar_g": 43.4,
    "vitamin_a_ug": 105.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-031",
  "state": "Dried",
  "subcategory": "FA",
  "tags": [
    "dried",
    "fa",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
