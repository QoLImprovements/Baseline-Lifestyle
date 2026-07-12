/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe. Gujerati dish",
  "id": "cofid-current-15-755",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, green bean, masala, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 4.4,
    "energy_kcal": 130.0,
    "fat_g": 12.5,
    "fibre_g": 3.1,
    "folate_ug": 41.0,
    "iron_mg": 1.4,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 263.0,
    "protein_g": 1.7,
    "salt_g": 0.035,
    "sat_fat_g": 0.87,
    "sodium_mg": 14.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 2.94,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-755",
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
