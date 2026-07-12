/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "No seed coat",
  "id": "cofid-current-13-141",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peas, split, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 58.2,
    "energy_kcal": 328.0,
    "fat_g": 2.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 5.4,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 270.0,
    "potassium_mg": 910.0,
    "protein_g": 22.1,
    "salt_g": 0.095,
    "sat_fat_g": 0.4,
    "sodium_mg": 38.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.04,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-141",
  "state": "Dried",
  "subcategory": "DF",
  "tags": [
    "df",
    "dried",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
