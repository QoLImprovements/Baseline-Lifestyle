/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-15-678",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, cauliflower, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 5.5,
    "energy_kcal": 211.0,
    "fat_g": 20.1,
    "fibre_g": 2.2,
    "folate_ug": 30.0,
    "iron_mg": 0.63,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 303.0,
    "protein_g": 2.9,
    "salt_g": 0.0475,
    "sat_fat_g": 9.21,
    "sodium_mg": 19.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 30.0,
    "vitamin_e_mg": 1.83,
    "vitamin_k_ug": 32.7
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-678",
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
