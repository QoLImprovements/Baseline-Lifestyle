/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-13-108",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, pinto, re-fried beans",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 15.3,
    "energy_kcal": 107.0,
    "fat_g": 1.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.8,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 390.0,
    "protein_g": 6.2,
    "salt_g": 1.05,
    "sat_fat_g": 0.0,
    "sodium_mg": 420.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-108",
  "state": "Fried",
  "subcategory": "DB",
  "tags": [
    "db",
    "fried",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
