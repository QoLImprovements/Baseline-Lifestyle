/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-15-783",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, potato, Punjabi, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 13.8,
    "energy_kcal": 94.0,
    "fat_g": 4.0,
    "fibre_g": 2.0,
    "folate_ug": 15.0,
    "iron_mg": 0.95,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 374.0,
    "protein_g": 1.8,
    "salt_g": 0.1225,
    "sat_fat_g": 2.45,
    "sodium_mg": 49.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-783",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
