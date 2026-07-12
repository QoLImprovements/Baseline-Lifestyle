/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe. Gujerati dish. Red lentil and potato cutlets.",
  "id": "cofid-current-15-820",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lentil cutlets, fried in vegetable oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 24.2,
    "energy_kcal": 199.0,
    "fat_g": 8.3,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 3.12,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 352.0,
    "protein_g": 8.5,
    "salt_g": 0.0625,
    "sat_fat_g": 0.57,
    "sodium_mg": 25.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-820",
  "state": "Fried",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fried",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
