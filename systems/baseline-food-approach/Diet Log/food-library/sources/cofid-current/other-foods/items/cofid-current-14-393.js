/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products, not including soft, ready-to-eat, or partially hydrated",
  "id": "cofid-current-14-393",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Raisins, dried",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 62.6,
    "energy_kcal": 256.0,
    "fat_g": 1.0,
    "fibre_g": 2.7,
    "folate_ug": 6.0,
    "iron_mg": 2.21,
    "magnesium_mg": 32.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 101.0,
    "potassium_mg": 889.0,
    "protein_g": 3.0,
    "salt_g": 0.0425,
    "sat_fat_g": 0.15,
    "sodium_mg": 17.0,
    "sugar_g": 62.6,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 3.7
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-393",
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
