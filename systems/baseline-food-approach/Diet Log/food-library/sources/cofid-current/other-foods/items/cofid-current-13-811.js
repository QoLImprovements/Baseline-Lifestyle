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
  "id": "cofid-current-13-811",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chervil, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1350.0,
    "carbs_g": 37.8,
    "energy_kcal": 237.0,
    "fat_g": 3.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 31.9,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 450.0,
    "potassium_mg": 4740.0,
    "protein_g": 23.2,
    "salt_g": 0.2075,
    "sat_fat_g": 0.0,
    "sodium_mg": 83.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-811",
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
