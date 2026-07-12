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
  "id": "cofid-current-11-1052",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastry, shortcrust, cooked, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 57.1,
    "energy_kcal": 509.0,
    "fat_g": 29.9,
    "fibre_g": 2.8,
    "folate_ug": 6.0,
    "iron_mg": 1.36,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 88.0,
    "potassium_mg": 133.0,
    "protein_g": 6.6,
    "salt_g": 0.645,
    "sat_fat_g": 18.62,
    "sodium_mg": 258.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 373.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1052",
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
