/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-785",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chutney, tomato, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 40.8,
    "energy_kcal": 166.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.68,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 264.0,
    "protein_g": 1.0,
    "salt_g": 0.02,
    "sat_fat_g": 0.02,
    "sodium_mg": 8.0,
    "sugar_g": 40.2,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-785",
  "state": "Unspecified",
  "subcategory": "WE",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "we"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
