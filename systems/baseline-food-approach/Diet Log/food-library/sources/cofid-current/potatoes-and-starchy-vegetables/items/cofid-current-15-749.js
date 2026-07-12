/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe. Punjabi dish. Courgette, potato, onion and tomato.",
  "id": "cofid-current-15-749",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, courgette and potato, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 9.6,
    "energy_kcal": 96.0,
    "fat_g": 5.9,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 0.59,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 405.0,
    "protein_g": 1.8,
    "salt_g": 0.005,
    "sat_fat_g": 0.35,
    "sodium_mg": 2.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-749",
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
