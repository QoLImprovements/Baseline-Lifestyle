/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Chick peas, onion and tomato. Recipe from dietary survey records",
  "id": "cofid-current-15-107",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, chick pea, whole and tomato, Punjabi, with butter, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 12.4,
    "energy_kcal": 107.0,
    "fat_g": 4.3,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 1.4,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 58.0,
    "potassium_mg": 210.0,
    "protein_g": 5.6,
    "salt_g": 0.0,
    "sat_fat_g": 2.0,
    "sodium_mg": 0.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-107",
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
