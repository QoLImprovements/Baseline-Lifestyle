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
  "id": "cofid-current-15-849",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato cakes, fried in rapeseed oil",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 31.4,
    "energy_kcal": 210.0,
    "fat_g": 8.4,
    "fibre_g": 2.1,
    "folate_ug": 15.0,
    "iron_mg": 0.73,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 305.0,
    "protein_g": 3.9,
    "salt_g": 0.0525,
    "sat_fat_g": 1.79,
    "sodium_mg": 21.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 1.52,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-849",
  "state": "Fried",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fried",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
