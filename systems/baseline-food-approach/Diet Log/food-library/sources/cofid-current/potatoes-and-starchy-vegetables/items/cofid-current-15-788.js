/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe. Punjabi dish. Tinda gourd, potato, tomato and onion.",
  "id": "cofid-current-15-788",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, tinda gourd and potato, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 8.5,
    "energy_kcal": 74.0,
    "fat_g": 3.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.71,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 232.0,
    "protein_g": 1.6,
    "salt_g": 0.1075,
    "sat_fat_g": 0.56,
    "sodium_mg": 43.0,
    "sugar_g": 3.5,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-788",
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
