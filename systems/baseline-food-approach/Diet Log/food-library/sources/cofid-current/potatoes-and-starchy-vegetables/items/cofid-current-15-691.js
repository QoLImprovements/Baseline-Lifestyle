/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from review of recipe collection",
  "id": "cofid-current-15-691",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, potato, onion and mushroom, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 12.1,
    "energy_kcal": 211.0,
    "fat_g": 17.3,
    "fibre_g": 2.2,
    "folate_ug": 9.0,
    "iron_mg": 0.78,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 371.0,
    "protein_g": 1.7,
    "salt_g": 0.0225,
    "sat_fat_g": 1.17,
    "sodium_mg": 9.0,
    "sugar_g": 3.5,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 3.95,
    "vitamin_k_ug": 19.62
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-691",
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
