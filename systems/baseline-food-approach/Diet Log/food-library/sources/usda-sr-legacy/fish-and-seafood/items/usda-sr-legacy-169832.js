/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169832",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "T.G.I. FRIDAY'S, FRIDAY'S Shrimp, breaded",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 20.9,
    "energy_kcal": 302.0,
    "fat_g": 19.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.53,
    "magnesium_mg": 16.0,
    "omega3_g": 1.031,
    "phosphorus_mg": 226.0,
    "potassium_mg": 122.0,
    "protein_g": 11.9,
    "salt_g": 3.025,
    "sat_fat_g": 3.5,
    "sodium_mg": 1210.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169832",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "fish-and-seafood",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
