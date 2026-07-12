/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "10 samples, 4 brands. Drained proportion = 0.56",
  "id": "cofid-current-14-146",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mandarin oranges, canned in juice, whole contents",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 7.7,
    "energy_kcal": 32.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.5,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 85.0,
    "protein_g": 0.7,
    "salt_g": 0.015,
    "sat_fat_g": 0.0,
    "sodium_mg": 6.0,
    "sugar_g": 7.7,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 20.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-146",
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
