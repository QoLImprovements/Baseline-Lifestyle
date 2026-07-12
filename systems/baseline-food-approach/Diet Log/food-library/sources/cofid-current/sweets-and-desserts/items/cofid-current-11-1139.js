/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1139",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastry, flaky, cooked, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 48.3,
    "energy_kcal": 540.0,
    "fat_g": 37.4,
    "fibre_g": 2.4,
    "folate_ug": 5.0,
    "iron_mg": 1.15,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 120.0,
    "protein_g": 5.7,
    "salt_g": 0.815,
    "sat_fat_g": 23.46,
    "sodium_mg": 326.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 472.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.17,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1139",
  "state": "Cooked",
  "subcategory": "AO",
  "tags": [
    "ao",
    "cooked",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
