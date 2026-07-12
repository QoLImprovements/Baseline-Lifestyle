/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 16-383 using 27.9% weight loss",
  "id": "cofid-current-16-431",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coley, flesh only, poached",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 114.0,
    "fat_g": 1.5,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.37,
    "magnesium_mg": 44.0,
    "omega3_g": 0.35,
    "phosphorus_mg": 237.0,
    "potassium_mg": 420.0,
    "protein_g": 25.0,
    "salt_g": 0.2375,
    "sat_fat_g": 0.27,
    "sodium_mg": 95.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-431",
  "state": "Poached",
  "subcategory": "JA",
  "tags": [
    "ja",
    "other-foods",
    "poached"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
