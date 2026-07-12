/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe, medium consistency",
  "id": "cofid-current-15-766",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, lentil, whole/masoor, Punjabi, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 13.9,
    "energy_kcal": 148.0,
    "fat_g": 8.3,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 2.34,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 81.0,
    "potassium_mg": 223.0,
    "protein_g": 5.7,
    "salt_g": 0.065,
    "sat_fat_g": 0.58,
    "sodium_mg": 26.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-766",
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
