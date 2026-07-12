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
  "id": "cofid-current-15-824",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Okra with tomatoes and onion, Greek, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 149.0,
    "carbs_g": 5.0,
    "energy_kcal": 180.0,
    "fat_g": 16.7,
    "fibre_g": 0.0,
    "folate_ug": 43.0,
    "iron_mg": 1.16,
    "magnesium_mg": 66.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 381.0,
    "protein_g": 2.8,
    "salt_g": 0.02,
    "sat_fat_g": 2.53,
    "sodium_mg": 8.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 93.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-824",
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
