/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Cauliflower, onion, tomato and spices. Recipe from literature sources",
  "id": "cofid-current-15-680",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, cauliflower and vegetable, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 6.6,
    "energy_kcal": 117.0,
    "fat_g": 9.1,
    "fibre_g": 0.0,
    "folate_ug": 26.0,
    "iron_mg": 2.19,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 363.0,
    "protein_g": 3.1,
    "salt_g": 0.2225,
    "sat_fat_g": 5.28,
    "sodium_mg": 89.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 186.0,
    "vitamin_c_mg": 28.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 24.32
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-680",
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
