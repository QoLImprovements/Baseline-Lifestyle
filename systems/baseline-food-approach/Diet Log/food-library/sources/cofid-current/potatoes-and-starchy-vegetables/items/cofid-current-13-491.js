/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "22 samples, autumn and winter, including white and red varieties, pre-packed and loose",
  "id": "cofid-current-13-491",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potatoes, old, baked, flesh and skin",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 22.6,
    "energy_kcal": 97.0,
    "fat_g": 0.2,
    "fibre_g": 2.6,
    "folate_ug": 18.0,
    "iron_mg": 0.63,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 600.0,
    "protein_g": 2.5,
    "salt_g": 0.005,
    "sat_fat_g": 0.1,
    "sodium_mg": 2.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.94
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-491",
  "state": "Baked",
  "subcategory": "DAM",
  "tags": [
    "baked",
    "dam",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
