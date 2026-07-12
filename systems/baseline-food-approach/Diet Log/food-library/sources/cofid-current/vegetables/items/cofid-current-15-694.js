/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from Wharton et al, 1983",
  "id": "cofid-current-15-694",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, spinach, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 190.0,
    "carbs_g": 2.5,
    "energy_kcal": 83.0,
    "fat_g": 6.9,
    "fibre_g": 0.0,
    "folate_ug": 62.0,
    "iron_mg": 2.6,
    "magnesium_mg": 61.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 573.0,
    "protein_g": 3.3,
    "salt_g": 0.5325,
    "sat_fat_g": 3.82,
    "sodium_mg": 213.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 724.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 1.98,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-694",
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
