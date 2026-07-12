/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Calculated from 13-627",
  "id": "cofid-current-13-668",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Courgette, dried",
  "nutritionPerBasis": {
    "calcium_mg": 485.0,
    "carbs_g": 41.2,
    "energy_kcal": 280.0,
    "fat_g": 3.6,
    "fibre_g": 9.0,
    "folate_ug": 0.0,
    "iron_mg": 7.5,
    "magnesium_mg": 421.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 723.0,
    "potassium_mg": 6104.0,
    "protein_g": 23.3,
    "salt_g": 0.0,
    "sat_fat_g": 0.9,
    "sodium_mg": 0.0,
    "sugar_g": 39.4,
    "vitamin_a_ug": 582.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.55,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-668",
  "state": "Dried",
  "subcategory": "DI",
  "tags": [
    "di",
    "dried",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
