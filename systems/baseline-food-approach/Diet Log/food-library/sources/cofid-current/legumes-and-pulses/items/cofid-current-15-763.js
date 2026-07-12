/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe, Bangladeshi dish, thin consistancy",
  "id": "cofid-current-15-763",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, lentil, red/masoor dahl, with butter, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 19.3,
    "energy_kcal": 161.0,
    "fat_g": 6.6,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 2.59,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 283.0,
    "protein_g": 7.6,
    "salt_g": 0.185,
    "sat_fat_g": 3.93,
    "sodium_mg": 74.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 88.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-763",
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
