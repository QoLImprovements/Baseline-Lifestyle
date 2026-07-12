/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Recipe. Vegetables in a basic UK-type curry sauce. Recipe from review of recipe collection",
  "id": "cofid-current-15-790",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, vegetable, in sweet sauce, UK type, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 7.3,
    "energy_kcal": 51.0,
    "fat_g": 2.1,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 0.83,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 208.0,
    "protein_g": 1.3,
    "salt_g": 0.0225,
    "sat_fat_g": 0.51,
    "sodium_mg": 9.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 221.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-790",
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
