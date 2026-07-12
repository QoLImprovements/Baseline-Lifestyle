/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 8 products, including soft, ready-to-eat and partially rehydrated",
  "id": "cofid-current-14-392",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Apricots, ready-to-eat, semi-dried",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 39.4,
    "energy_kcal": 161.0,
    "fat_g": 0.5,
    "fibre_g": 5.3,
    "folate_ug": 13.0,
    "iron_mg": 1.35,
    "magnesium_mg": 34.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 67.0,
    "potassium_mg": 1039.0,
    "protein_g": 2.2,
    "salt_g": 0.0225,
    "sat_fat_g": 0.13,
    "sodium_mg": 9.0,
    "sugar_g": 39.4,
    "vitamin_a_ug": 92.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 3.68,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-392",
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
