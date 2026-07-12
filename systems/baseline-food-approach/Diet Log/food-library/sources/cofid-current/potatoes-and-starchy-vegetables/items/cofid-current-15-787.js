/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe, Frozen spinach and potato in masala sauce.",
  "id": "cofid-current-15-787",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, spinach and potato, masala, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 7.4,
    "energy_kcal": 110.0,
    "fat_g": 8.2,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 1.05,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 332.0,
    "protein_g": 2.2,
    "salt_g": 0.0875,
    "sat_fat_g": 0.57,
    "sodium_mg": 35.0,
    "sugar_g": 4.9,
    "vitamin_a_ug": 331.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 2.98,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-787",
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
