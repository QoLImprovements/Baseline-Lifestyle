/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Bangladeshi dish. Recipe adapted from literature sources",
  "id": "cofid-current-15-690",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, potato and onion, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 16.7,
    "energy_kcal": 162.0,
    "fat_g": 10.1,
    "fibre_g": 2.6,
    "folate_ug": 8.0,
    "iron_mg": 0.72,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 413.0,
    "protein_g": 2.1,
    "salt_g": 0.23,
    "sat_fat_g": 6.32,
    "sodium_mg": 92.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 130.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 1.6
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-690",
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
