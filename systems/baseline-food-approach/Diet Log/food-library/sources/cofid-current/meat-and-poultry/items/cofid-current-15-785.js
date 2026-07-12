/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe, thin-medium consistency",
  "id": "cofid-current-15-785",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, red kidney bean, Gujerati, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 9.7,
    "energy_kcal": 107.0,
    "fat_g": 6.1,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 1.45,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 77.0,
    "potassium_mg": 280.0,
    "protein_g": 4.0,
    "salt_g": 0.01,
    "sat_fat_g": 0.43,
    "sodium_mg": 4.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 1.42,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-785",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
