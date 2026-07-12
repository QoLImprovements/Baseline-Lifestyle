/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from the Aga Khan Health Board for the United Kingdom. Very dry dish",
  "id": "cofid-current-15-686",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, okra, Islami, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 234.0,
    "carbs_g": 8.9,
    "energy_kcal": 201.0,
    "fat_g": 17.1,
    "fibre_g": 0.0,
    "folate_ug": 62.0,
    "iron_mg": 2.63,
    "magnesium_mg": 103.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 102.0,
    "potassium_mg": 580.0,
    "protein_g": 4.6,
    "salt_g": 0.1875,
    "sat_fat_g": 1.36,
    "sodium_mg": 75.0,
    "sugar_g": 7.0,
    "vitamin_a_ug": 136.0,
    "vitamin_c_mg": 16.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 16.49
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-686",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
