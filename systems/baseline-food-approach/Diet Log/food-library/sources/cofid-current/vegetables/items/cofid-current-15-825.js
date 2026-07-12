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
  "id": "cofid-current-15-825",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Okra with tomatoes and onion, West Indian, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 158.0,
    "carbs_g": 4.7,
    "energy_kcal": 98.0,
    "fat_g": 7.7,
    "fibre_g": 0.0,
    "folate_ug": 45.0,
    "iron_mg": 1.36,
    "magnesium_mg": 71.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 68.0,
    "potassium_mg": 407.0,
    "protein_g": 3.0,
    "salt_g": 0.0625,
    "sat_fat_g": 0.74,
    "sodium_mg": 25.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 109.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-825",
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
