/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe, Basic UK-type dish. Lentil, tomato, carrot and pepper",
  "id": "cofid-current-15-761",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, lentil, red/masoor dahl and vegetable, UK type, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 14.8,
    "energy_kcal": 112.0,
    "fat_g": 3.8,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 2.26,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 256.0,
    "protein_g": 5.7,
    "salt_g": 0.03,
    "sat_fat_g": 0.3,
    "sodium_mg": 12.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 145.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-761",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
