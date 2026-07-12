/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 16-383 using 26.1% weight loss",
  "id": "cofid-current-16-429",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coley, flesh only, baked",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 111.0,
    "fat_g": 1.5,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.37,
    "magnesium_mg": 43.0,
    "omega3_g": 0.34,
    "phosphorus_mg": 231.0,
    "potassium_mg": 410.0,
    "protein_g": 24.4,
    "salt_g": 0.23,
    "sat_fat_g": 0.27,
    "sodium_mg": 92.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-429",
  "state": "Baked",
  "subcategory": "JA",
  "tags": [
    "baked",
    "ja",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
