/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-old-19-053",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, Bridie/Scotch, individual",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 20.9,
    "energy_kcal": 202.0,
    "fat_g": 10.5,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.3,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.0,
    "potassium_mg": 120.0,
    "protein_g": 7.4,
    "salt_g": 1.1,
    "sat_fat_g": 4.8,
    "sodium_mg": 440.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-053",
  "state": "Unspecified",
  "subcategory": "MI",
  "tags": [
    "mi",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
