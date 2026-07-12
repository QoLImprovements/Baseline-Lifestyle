/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from dietary survey records",
  "id": "cofid-current-15-799",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flan, cheese, onion and potato, wholemeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 321.0,
    "carbs_g": 19.1,
    "energy_kcal": 345.0,
    "fat_g": 24.3,
    "fibre_g": 2.7,
    "folate_ug": 23.0,
    "iron_mg": 0.75,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 281.0,
    "potassium_mg": 197.0,
    "protein_g": 13.6,
    "salt_g": 0.965,
    "sat_fat_g": 14.82,
    "sodium_mg": 386.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-799",
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
