/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products",
  "id": "cofid-current-11-735",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta, spaghetti, canned, in tomato sauce",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 16.2,
    "energy_kcal": 72.0,
    "fat_g": 0.3,
    "fibre_g": 0.9,
    "folate_ug": 4.0,
    "iron_mg": 0.57,
    "magnesium_mg": 9.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 27.0,
    "potassium_mg": 122.0,
    "protein_g": 2.1,
    "salt_g": 0.475,
    "sat_fat_g": 0.05,
    "sodium_mg": 190.0,
    "sugar_g": 5.5,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-735",
  "state": "Canned",
  "subcategory": "AD",
  "tags": [
    "ad",
    "canned",
    "condiments-and-sauces"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
