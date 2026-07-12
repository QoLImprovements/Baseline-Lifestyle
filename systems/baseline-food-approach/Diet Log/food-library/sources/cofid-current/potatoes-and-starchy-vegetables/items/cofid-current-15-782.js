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
  "id": "cofid-current-15-782",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, potato, Gujerati, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 11.8,
    "energy_kcal": 94.0,
    "fat_g": 5.4,
    "fibre_g": 1.4,
    "folate_ug": 12.0,
    "iron_mg": 0.91,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 225.0,
    "protein_g": 1.5,
    "salt_g": 0.055,
    "sat_fat_g": 0.38,
    "sodium_mg": 22.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 1.27,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-782",
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
