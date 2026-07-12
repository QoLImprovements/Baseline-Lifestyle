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
  "id": "cofid-current-17-851",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Apple sauce, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 20.2,
    "energy_kcal": 79.0,
    "fat_g": 0.2,
    "fibre_g": 1.4,
    "folate_ug": 1.0,
    "iron_mg": 0.11,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 75.0,
    "protein_g": 0.3,
    "salt_g": 0.005,
    "sat_fat_g": 0.05,
    "sodium_mg": 2.0,
    "sugar_g": 20.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-851",
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
