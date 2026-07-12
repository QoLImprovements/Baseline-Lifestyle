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
  "id": "cofid-current-14-895",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breadnut seeds, dried",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 73.8,
    "energy_kcal": 367.0,
    "fat_g": 1.7,
    "fibre_g": 14.9,
    "folate_ug": 113.0,
    "iron_mg": 4.6,
    "magnesium_mg": 115.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 2011.0,
    "protein_g": 8.6,
    "salt_g": 0.1325,
    "sat_fat_g": 0.5,
    "sodium_mg": 53.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 47.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-895",
  "state": "Dried",
  "subcategory": "G",
  "tags": [
    "dried",
    "g",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
