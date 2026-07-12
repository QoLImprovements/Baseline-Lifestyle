/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe from review of recipe collection",
  "id": "cofid-current-15-198",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lentil roast, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 21.9,
    "energy_kcal": 139.0,
    "fat_g": 3.0,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 2.7,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 280.0,
    "protein_g": 7.7,
    "salt_g": 0.7,
    "sat_fat_g": 0.4,
    "sodium_mg": 280.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 123.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-198",
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
