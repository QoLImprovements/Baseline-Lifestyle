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
  "id": "cofid-current-17-800",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Hollandaise sauce, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 0.9,
    "energy_kcal": 717.0,
    "fat_g": 77.9,
    "fibre_g": 0.1,
    "folate_ug": 23.0,
    "iron_mg": 2.06,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 183.0,
    "potassium_mg": 66.0,
    "protein_g": 5.1,
    "salt_g": 1.575,
    "sat_fat_g": 46.36,
    "sodium_mg": 630.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 1019.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 2.97,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-800",
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
