/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Literature sources and calculation from 14-813",
  "id": "cofid-current-14-815",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chestnuts, dried",
  "nutritionPerBasis": {
    "calcium_mg": 87.0,
    "carbs_g": 69.0,
    "energy_kcal": 319.0,
    "fat_g": 5.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.7,
    "magnesium_mg": 62.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 940.0,
    "protein_g": 3.7,
    "salt_g": 0.0525,
    "sat_fat_g": 0.9,
    "sodium_mg": 21.0,
    "sugar_g": 13.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.26,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-815",
  "state": "Dried",
  "subcategory": "GA",
  "tags": [
    "dried",
    "ga",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
