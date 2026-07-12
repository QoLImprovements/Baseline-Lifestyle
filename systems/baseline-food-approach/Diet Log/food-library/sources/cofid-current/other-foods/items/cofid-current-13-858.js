/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-13-858",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tarragon, dried, ground",
  "nutritionPerBasis": {
    "calcium_mg": 1140.0,
    "carbs_g": 42.8,
    "energy_kcal": 295.0,
    "fat_g": 7.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 32.3,
    "magnesium_mg": 350.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 310.0,
    "potassium_mg": 3020.0,
    "protein_g": 22.8,
    "salt_g": 0.155,
    "sat_fat_g": 0.0,
    "sodium_mg": 62.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 420.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-858",
  "state": "Dried",
  "subcategory": "H",
  "tags": [
    "dried",
    "h",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
