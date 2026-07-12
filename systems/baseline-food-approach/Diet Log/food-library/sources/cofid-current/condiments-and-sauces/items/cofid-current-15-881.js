/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Recipe. Gujerati dish. Recipe from a personal collection",
  "id": "cofid-current-15-881",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, curry, tomato and onion, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 6.1,
    "energy_kcal": 201.0,
    "fat_g": 19.2,
    "fibre_g": 2.0,
    "folate_ug": 7.0,
    "iron_mg": 1.09,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 294.0,
    "protein_g": 1.7,
    "salt_g": 0.0725,
    "sat_fat_g": 1.3,
    "sodium_mg": 29.0,
    "sugar_g": 4.6,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 5.46,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-881",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "condiments-and-sauces",
    "dr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
