/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-current-14-879",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Walnuts, kernel only",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 3.3,
    "energy_kcal": 688.0,
    "fat_g": 68.5,
    "fibre_g": 0.0,
    "folate_ug": 66.0,
    "iron_mg": 2.9,
    "magnesium_mg": 160.0,
    "omega3_g": 7.47,
    "phosphorus_mg": 380.0,
    "potassium_mg": 450.0,
    "protein_g": 14.7,
    "salt_g": 0.0175,
    "sat_fat_g": 7.47,
    "sodium_mg": 7.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.85,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-879",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
