/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe. Filling for Dosa pancakes.",
  "id": "cofid-current-15-513",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Dosa, filling, vegetable, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 10.2,
    "energy_kcal": 97.0,
    "fat_g": 6.3,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 1.03,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 309.0,
    "protein_g": 1.8,
    "salt_g": 1.115,
    "sat_fat_g": 0.74,
    "sodium_mg": 446.0,
    "sugar_g": 4.1,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-513",
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
