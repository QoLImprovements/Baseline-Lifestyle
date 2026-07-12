/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Analytical and literature sources",
  "id": "cofid-current-14-873",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coconut, desiccated",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 6.4,
    "energy_kcal": 604.0,
    "fat_g": 62.0,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 3.6,
    "magnesium_mg": 90.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 160.0,
    "potassium_mg": 660.0,
    "protein_g": 5.6,
    "salt_g": 0.07,
    "sat_fat_g": 53.4,
    "sodium_mg": 28.0,
    "sugar_g": 6.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.26,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-873",
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
