/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products",
  "id": "cofid-current-14-395",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Figs, ready-to-eat, semi-dried",
  "nutritionPerBasis": {
    "calcium_mg": 191.0,
    "carbs_g": 43.3,
    "energy_kcal": 186.0,
    "fat_g": 1.2,
    "fibre_g": 10.0,
    "folate_ug": 3.0,
    "iron_mg": 1.44,
    "magnesium_mg": 67.0,
    "omega3_g": 0.38,
    "phosphorus_mg": 75.0,
    "potassium_mg": 784.0,
    "protein_g": 3.1,
    "salt_g": 0.2775,
    "sat_fat_g": 0.13,
    "sodium_mg": 111.0,
    "sugar_g": 43.3,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-395",
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
