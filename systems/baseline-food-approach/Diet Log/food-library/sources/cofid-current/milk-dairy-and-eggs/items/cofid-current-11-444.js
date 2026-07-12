/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples from different outlets",
  "id": "cofid-current-11-444",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice, egg fried, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 33.3,
    "energy_kcal": 186.0,
    "fat_g": 4.9,
    "fibre_g": 1.1,
    "folate_ug": 8.0,
    "iron_mg": 0.47,
    "magnesium_mg": 6.0,
    "omega3_g": 0.31,
    "phosphorus_mg": 47.0,
    "potassium_mg": 37.0,
    "protein_g": 4.3,
    "salt_g": 1.0425,
    "sat_fat_g": 0.62,
    "sodium_mg": 417.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-444",
  "state": "Fried",
  "subcategory": "AC",
  "tags": [
    "ac",
    "fried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
