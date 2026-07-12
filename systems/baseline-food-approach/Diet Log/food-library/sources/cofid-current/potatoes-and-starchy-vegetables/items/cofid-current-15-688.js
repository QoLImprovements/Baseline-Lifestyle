/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Gujerati dish. Recipe from review of recipe collection",
  "id": "cofid-current-15-688",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, potato and fenugreek leaves, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 18.8,
    "energy_kcal": 222.0,
    "fat_g": 15.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 5.16,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 65.0,
    "potassium_mg": 465.0,
    "protein_g": 3.7,
    "salt_g": 0.1175,
    "sat_fat_g": 0.0,
    "sodium_mg": 47.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 313.0,
    "vitamin_c_mg": 20.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 17.29
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-688",
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
