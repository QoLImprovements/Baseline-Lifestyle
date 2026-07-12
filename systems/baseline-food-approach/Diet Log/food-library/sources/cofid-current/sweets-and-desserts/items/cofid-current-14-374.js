/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Calculated from 14-372",
  "id": "cofid-current-14-374",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Plums, dessert, flesh and skin, raw, weighed with stones",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 9.4,
    "energy_kcal": 40.0,
    "fat_g": 0.2,
    "fibre_g": 1.3,
    "folate_ug": 1.0,
    "iron_mg": 0.12,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 181.0,
    "protein_g": 0.6,
    "salt_g": 0.0,
    "sat_fat_g": 0.02,
    "sodium_mg": 0.0,
    "sugar_g": 9.4,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 7.28
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-374",
  "state": "Raw",
  "subcategory": "FA",
  "tags": [
    "fa",
    "raw",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
