/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "22 samples, autumn and winter, UK grown and imported, pre-packed and loose, Calabrese",
  "id": "cofid-current-13-502",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Broccoli, green, raw",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 3.2,
    "energy_kcal": 34.0,
    "fat_g": 0.6,
    "fibre_g": 4.0,
    "folate_ug": 95.0,
    "iron_mg": 1.06,
    "magnesium_mg": 22.0,
    "omega3_g": 0.17,
    "phosphorus_mg": 81.0,
    "potassium_mg": 397.0,
    "protein_g": 4.3,
    "salt_g": 0.0225,
    "sat_fat_g": 0.15,
    "sodium_mg": 9.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 97.0,
    "vitamin_c_mg": 79.0,
    "vitamin_e_mg": 1.72,
    "vitamin_k_ug": 185.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-502",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
