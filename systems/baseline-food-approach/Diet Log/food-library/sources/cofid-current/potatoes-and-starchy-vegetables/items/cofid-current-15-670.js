/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Gujerati dish. Recipe from a personal collection",
  "id": "cofid-current-15-670",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, aubergine, pea, potato and cauliflower, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 10.7,
    "energy_kcal": 72.0,
    "fat_g": 2.5,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 1.19,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 336.0,
    "protein_g": 2.9,
    "salt_g": 0.025,
    "sat_fat_g": 0.24,
    "sodium_mg": 10.0,
    "sugar_g": 4.3,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-670",
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
