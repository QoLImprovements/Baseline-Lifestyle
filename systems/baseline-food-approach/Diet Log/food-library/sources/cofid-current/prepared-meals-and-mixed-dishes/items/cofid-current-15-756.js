/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "Recipe. Punjabi dish. Karela, onion and tomato.",
  "id": "cofid-current-15-756",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, karela, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 4.6,
    "energy_kcal": 111.0,
    "fat_g": 9.7,
    "fibre_g": 1.2,
    "folate_ug": 20.0,
    "iron_mg": 1.11,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 327.0,
    "protein_g": 1.6,
    "salt_g": 0.005,
    "sat_fat_g": 1.38,
    "sodium_mg": 2.0,
    "sugar_g": 3.3,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 64.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-756",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
