/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Punjabi dish. Potato, pepper, onion and tomato. Recipe from dietary survey records",
  "id": "cofid-current-15-689",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, potato and green pepper, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 12.7,
    "energy_kcal": 134.0,
    "fat_g": 9.0,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.42,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 327.0,
    "protein_g": 1.5,
    "salt_g": 0.0075,
    "sat_fat_g": 0.63,
    "sodium_mg": 3.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 27.0,
    "vitamin_e_mg": 2.33,
    "vitamin_k_ug": 13.28
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-689",
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
