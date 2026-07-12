/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe, Bangladeshi dish",
  "id": "cofid-current-15-781",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, potato and pea, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 13.0,
    "energy_kcal": 92.0,
    "fat_g": 3.7,
    "fibre_g": 3.1,
    "folate_ug": 16.0,
    "iron_mg": 1.25,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 51.0,
    "potassium_mg": 294.0,
    "protein_g": 2.7,
    "salt_g": 0.075,
    "sat_fat_g": 0.28,
    "sodium_mg": 30.0,
    "sugar_g": 3.7,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-781",
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
