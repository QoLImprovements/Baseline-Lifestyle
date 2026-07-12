/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 14-391",
  "id": "cofid-current-14-398",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Prunes, ready-to-eat, semi-dried, weighed with stones",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 31.4,
    "energy_kcal": 128.0,
    "fat_g": 0.3,
    "fibre_g": 4.5,
    "folate_ug": 1.0,
    "iron_mg": 1.24,
    "magnesium_mg": 31.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 59.0,
    "potassium_mg": 631.0,
    "protein_g": 2.0,
    "salt_g": 0.0075,
    "sat_fat_g": 0.05,
    "sodium_mg": 3.0,
    "sugar_g": 31.4,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-398",
  "state": "Dried",
  "subcategory": "FA",
  "tags": [
    "dried",
    "fa",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
