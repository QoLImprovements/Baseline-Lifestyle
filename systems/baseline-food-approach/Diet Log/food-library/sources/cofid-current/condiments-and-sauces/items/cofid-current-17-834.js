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
  "id": "cofid-current-17-834",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, tomato based, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 6.5,
    "energy_kcal": 70.0,
    "fat_g": 4.5,
    "fibre_g": 1.3,
    "folate_ug": 11.0,
    "iron_mg": 0.75,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 286.0,
    "protein_g": 1.5,
    "salt_g": 0.02,
    "sat_fat_g": 0.63,
    "sodium_mg": 8.0,
    "sugar_g": 5.1,
    "vitamin_a_ug": 72.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 1.79,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-834",
  "state": "Unspecified",
  "subcategory": "WC",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "wc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
