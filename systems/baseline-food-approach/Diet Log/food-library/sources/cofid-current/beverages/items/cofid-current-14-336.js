/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "10 samples, 6 brands. Drained proportion = 0.65",
  "id": "cofid-current-14-336",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fruit cocktail, canned in juice, whole contents",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 11.7,
    "energy_kcal": 45.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.4,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 95.0,
    "protein_g": 0.4,
    "salt_g": 0.0075,
    "sat_fat_g": 0.0,
    "sodium_mg": 3.0,
    "sugar_g": 11.7,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 14.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-336",
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
