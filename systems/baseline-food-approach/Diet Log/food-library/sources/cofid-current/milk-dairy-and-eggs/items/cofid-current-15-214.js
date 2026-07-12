/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe from review of recipe collection.",
  "id": "cofid-current-15-214",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Nut roast, mixed nuts with egg, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 16.9,
    "energy_kcal": 338.0,
    "fat_g": 24.7,
    "fibre_g": 0.0,
    "folate_ug": 26.0,
    "iron_mg": 1.9,
    "magnesium_mg": 100.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 270.0,
    "potassium_mg": 450.0,
    "protein_g": 13.3,
    "salt_g": 0.825,
    "sat_fat_g": 3.9,
    "sodium_mg": 330.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.17,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-214",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
