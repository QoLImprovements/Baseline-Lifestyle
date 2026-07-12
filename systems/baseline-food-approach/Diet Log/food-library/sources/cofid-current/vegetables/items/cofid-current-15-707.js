/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "West Indian dish. Spinach and okra. Recipe from a personal collection",
  "id": "cofid-current-15-707",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Callaloo and okra, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 2.2,
    "energy_kcal": 73.0,
    "fat_g": 6.4,
    "fibre_g": 0.0,
    "folate_ug": 32.0,
    "iron_mg": 1.11,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 300.0,
    "protein_g": 1.8,
    "salt_g": 0.245,
    "sat_fat_g": 2.75,
    "sodium_mg": 98.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 327.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 175.88
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-707",
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
