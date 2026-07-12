/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "10 samples, 8 brands. Drained proportion = 0.52",
  "id": "cofid-current-14-107",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Grapefruit, canned in juice, whole contents",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 7.3,
    "energy_kcal": 30.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.3,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 72.0,
    "protein_g": 0.6,
    "salt_g": 0.025,
    "sat_fat_g": 0.0,
    "sodium_mg": 10.0,
    "sugar_g": 7.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 33.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-107",
  "state": "Canned",
  "subcategory": "FA",
  "tags": [
    "beverages",
    "canned",
    "fa"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
