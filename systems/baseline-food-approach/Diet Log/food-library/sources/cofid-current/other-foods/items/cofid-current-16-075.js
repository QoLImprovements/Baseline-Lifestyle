/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from grilled 16-074",
  "id": "cofid-current-16-075",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Halibut, grilled, weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 0.0,
    "energy_kcal": 95.0,
    "fat_g": 1.7,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.5,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 380.0,
    "protein_g": 19.7,
    "salt_g": 0.1375,
    "sat_fat_g": 0.3,
    "sodium_mg": 55.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-075",
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
