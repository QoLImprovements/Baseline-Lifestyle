/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products. Fine, medium and thick noodles",
  "id": "cofid-current-11-719",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Noodles, egg, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 72.6,
    "energy_kcal": 338.0,
    "fat_g": 2.0,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 2.65,
    "magnesium_mg": 49.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 187.0,
    "potassium_mg": 378.0,
    "protein_g": 12.0,
    "salt_g": 1.25,
    "sat_fat_g": 0.31,
    "sodium_mg": 500.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-719",
  "state": "Dried",
  "subcategory": "AD",
  "tags": [
    "ad",
    "dried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
