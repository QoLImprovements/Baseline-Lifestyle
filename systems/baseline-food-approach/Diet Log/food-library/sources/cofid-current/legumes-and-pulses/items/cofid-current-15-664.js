/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe from dietary survey records",
  "id": "cofid-current-15-664",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bean loaf, mixed beans, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 15.1,
    "energy_kcal": 148.0,
    "fat_g": 7.2,
    "fibre_g": 0.0,
    "folate_ug": 52.0,
    "iron_mg": 1.61,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 131.0,
    "potassium_mg": 419.0,
    "protein_g": 6.6,
    "salt_g": 0.0125,
    "sat_fat_g": 0.59,
    "sodium_mg": 5.0,
    "sugar_g": 3.6,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 1.98,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-664",
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
