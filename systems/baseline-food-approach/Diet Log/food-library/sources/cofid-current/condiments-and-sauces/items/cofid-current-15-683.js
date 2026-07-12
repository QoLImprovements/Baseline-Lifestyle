/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Recipe from literature sources",
  "id": "cofid-current-15-683",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, mustard leaves and spinach, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 163.0,
    "carbs_g": 3.8,
    "energy_kcal": 84.0,
    "fat_g": 6.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.6,
    "magnesium_mg": 47.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 458.0,
    "protein_g": 3.1,
    "salt_g": 0.3375,
    "sat_fat_g": 3.75,
    "sodium_mg": 135.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 382.0,
    "vitamin_c_mg": 30.0,
    "vitamin_e_mg": 2.18,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-683",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "condiments-and-sauces",
    "dr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
