/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Punjabi dish. Recipe from dietary survey records",
  "id": "cofid-current-15-697",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, turnip and onion, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 7.1,
    "energy_kcal": 126.0,
    "fat_g": 10.6,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.31,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 251.0,
    "protein_g": 1.2,
    "salt_g": 0.0275,
    "sat_fat_g": 6.2,
    "sodium_mg": 11.0,
    "sugar_g": 5.9,
    "vitamin_a_ug": 134.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 0.09
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-697",
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
