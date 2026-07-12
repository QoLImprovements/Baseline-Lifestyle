/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-13-825",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Dill, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1780.0,
    "carbs_g": 42.2,
    "energy_kcal": 253.0,
    "fat_g": 4.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 48.8,
    "magnesium_mg": 450.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 540.0,
    "potassium_mg": 3310.0,
    "protein_g": 19.9,
    "salt_g": 0.525,
    "sat_fat_g": 0.0,
    "sodium_mg": 210.0,
    "sugar_g": 37.6,
    "vitamin_a_ug": 5545.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 9.27,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-825",
  "state": "Dried",
  "subcategory": "H",
  "tags": [
    "dried",
    "h",
    "herbs-spices-and-seasonings"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
