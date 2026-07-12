/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Recipe. Italian dish. Basil and parmesan sauce for pasta. Recipe from Waltham Forest College",
  "id": "cofid-current-15-838",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pesto sauce, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 487.0,
    "carbs_g": 2.4,
    "energy_kcal": 501.0,
    "fat_g": 46.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.26,
    "magnesium_mg": 68.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 423.0,
    "potassium_mg": 267.0,
    "protein_g": 19.0,
    "salt_g": 0.7275,
    "sat_fat_g": 12.26,
    "sodium_mg": 291.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 273.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 3.84,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-838",
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
