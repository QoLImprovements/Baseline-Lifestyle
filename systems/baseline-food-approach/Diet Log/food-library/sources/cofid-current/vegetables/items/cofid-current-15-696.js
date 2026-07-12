/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from literature sources",
  "id": "cofid-current-15-696",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, turnip, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 6.5,
    "energy_kcal": 179.0,
    "fat_g": 16.4,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 1.17,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 341.0,
    "protein_g": 1.3,
    "salt_g": 0.0425,
    "sat_fat_g": 9.59,
    "sodium_mg": 17.0,
    "sugar_g": 5.4,
    "vitamin_a_ug": 207.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 0.15
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-696",
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
