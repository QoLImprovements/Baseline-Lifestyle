/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe, Gujerati dish. Cauliflower, potato, tomato and onion.",
  "id": "cofid-current-15-741",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, cauliflower and potato, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 6.7,
    "energy_kcal": 60.0,
    "fat_g": 2.0,
    "fibre_g": 2.1,
    "folate_ug": 24.0,
    "iron_mg": 0.6,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 333.0,
    "protein_g": 2.6,
    "salt_g": 0.0325,
    "sat_fat_g": 0.19,
    "sodium_mg": 13.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 24.0,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-741",
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
