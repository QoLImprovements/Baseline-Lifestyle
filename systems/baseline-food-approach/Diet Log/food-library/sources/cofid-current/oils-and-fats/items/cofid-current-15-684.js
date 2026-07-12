/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Okra, onion and spices. Recipe adapted from literature sources",
  "id": "cofid-current-15-684",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, okra, Bangladeshi, with butter ghee, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 112.0,
    "carbs_g": 7.7,
    "energy_kcal": 97.0,
    "fat_g": 6.2,
    "fibre_g": 0.0,
    "folate_ug": 29.0,
    "iron_mg": 0.96,
    "magnesium_mg": 46.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 53.0,
    "potassium_mg": 299.0,
    "protein_g": 2.4,
    "salt_g": 0.0175,
    "sat_fat_g": 3.5,
    "sodium_mg": 7.0,
    "sugar_g": 5.6,
    "vitamin_a_ug": 119.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-684",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
