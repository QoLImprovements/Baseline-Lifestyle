/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Whole peas",
  "id": "cofid-current-13-130",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peas, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 52.0,
    "energy_kcal": 303.0,
    "fat_g": 2.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 4.7,
    "magnesium_mg": 120.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 300.0,
    "potassium_mg": 990.0,
    "protein_g": 21.6,
    "salt_g": 0.095,
    "sat_fat_g": 0.4,
    "sodium_mg": 38.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.04,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-130",
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
