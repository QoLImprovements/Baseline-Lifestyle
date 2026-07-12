/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Analysis and literature sources",
  "id": "cofid-current-13-341",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Seaweed, wakame, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 660.0,
    "carbs_g": 0.0,
    "energy_kcal": 71.0,
    "fat_g": 2.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 11.6,
    "magnesium_mg": 470.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 310.0,
    "potassium_mg": 220.0,
    "protein_g": 12.4,
    "salt_g": 8.05,
    "sat_fat_g": 0.3,
    "sodium_mg": 3220.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 86.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-341",
  "state": "Dried",
  "subcategory": "DG",
  "tags": [
    "dg",
    "dried",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
