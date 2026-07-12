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
  "id": "cofid-current-15-802",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flan, spinach, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 176.0,
    "carbs_g": 13.4,
    "energy_kcal": 211.0,
    "fat_g": 14.7,
    "fibre_g": 0.0,
    "folate_ug": 31.0,
    "iron_mg": 1.16,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 137.0,
    "potassium_mg": 237.0,
    "protein_g": 8.6,
    "salt_g": 0.4575,
    "sat_fat_g": 5.29,
    "sodium_mg": 183.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 477.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 2.24,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-802",
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
