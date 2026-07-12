/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from grilled 16-071",
  "id": "cofid-current-16-072",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Hake, flesh only, grilled, weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 74.0,
    "fat_g": 1.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.4,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 220.0,
    "protein_g": 14.4,
    "salt_g": 0.21,
    "sat_fat_g": 0.3,
    "sodium_mg": 84.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-072",
  "state": "Grilled",
  "subcategory": "JA",
  "tags": [
    "grilled",
    "ja",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
