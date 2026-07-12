/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 16-382 and 27.2% weight loss",
  "id": "cofid-current-16-433",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pangasius, flesh only, poached",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 102.0,
    "fat_g": 2.2,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 0.12,
    "magnesium_mg": 39.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 228.0,
    "potassium_mg": 403.0,
    "protein_g": 20.5,
    "salt_g": 0.7,
    "sat_fat_g": 0.68,
    "sodium_mg": 280.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-433",
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
