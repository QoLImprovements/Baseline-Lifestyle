/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Recipe. Basic UK-type sauce with fruit and coconut. Recipe from review of recipe collection",
  "id": "cofid-current-15-751",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, curry, sweet, UK type, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 9.8,
    "energy_kcal": 92.0,
    "fat_g": 5.7,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.52,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 164.0,
    "protein_g": 1.1,
    "salt_g": 0.03,
    "sat_fat_g": 1.37,
    "sodium_mg": 12.0,
    "sugar_g": 5.7,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-751",
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
