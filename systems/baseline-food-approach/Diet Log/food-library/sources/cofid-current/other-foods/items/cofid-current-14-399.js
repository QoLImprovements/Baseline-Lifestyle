/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 14-394",
  "id": "cofid-current-14-399",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Dates, dried, flesh and skin, weighed with stones",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 49.3,
    "energy_kcal": 197.0,
    "fat_g": 0.5,
    "fibre_g": 6.3,
    "folate_ug": 11.0,
    "iron_mg": 1.86,
    "magnesium_mg": 46.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 611.0,
    "protein_g": 2.0,
    "salt_g": 0.0225,
    "sat_fat_g": 0.25,
    "sodium_mg": 9.0,
    "sugar_g": 48.7,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-399",
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
