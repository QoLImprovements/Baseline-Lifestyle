/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "7 samples",
  "id": "cofid-old-17-106",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sweets, foam sweets",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 80.1,
    "energy_kcal": 361.0,
    "fat_g": 4.8,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.4,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 38.0,
    "protein_g": 4.4,
    "salt_g": 0.0875,
    "sat_fat_g": 0.0,
    "sodium_mg": 35.0,
    "sugar_g": 72.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-106",
  "state": "Unspecified",
  "subcategory": "SEC",
  "tags": [
    "sec",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
