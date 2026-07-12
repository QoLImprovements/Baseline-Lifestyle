/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "11 samples, mixture of UK and imported, including red, purple and yellow",
  "id": "cofid-current-14-372",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Plums, dessert, flesh and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.55,
    "carbs_g": 9.7,
    "energy_kcal": 41.0,
    "fat_g": 0.3,
    "fibre_g": 1.3,
    "folate_ug": 1.3,
    "iron_mg": 0.12,
    "magnesium_mg": 6.91,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.4,
    "potassium_mg": 187.0,
    "protein_g": 0.6,
    "salt_g": 0.0,
    "sat_fat_g": 0.02,
    "sodium_mg": 0.0,
    "sugar_g": 9.7,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 7.5
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-372",
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
