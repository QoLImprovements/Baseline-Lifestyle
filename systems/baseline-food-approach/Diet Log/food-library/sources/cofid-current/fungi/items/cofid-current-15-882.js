/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "g",
  "description": "Recipe, Sauce for pasta or pizza. Recipe from review of recipe collection",
  "id": "cofid-current-15-882",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, tomato and mushroom, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 6.0,
    "energy_kcal": 46.0,
    "fat_g": 2.0,
    "fibre_g": 1.5,
    "folate_ug": 17.0,
    "iron_mg": 0.83,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 289.0,
    "protein_g": 1.4,
    "salt_g": 0.015,
    "sat_fat_g": 0.19,
    "sodium_mg": 6.0,
    "sugar_g": 4.7,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 2.07,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-882",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fungi",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
