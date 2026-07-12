/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-15-769",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, mung bean, whole and turnip leaves, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 6.2,
    "energy_kcal": 169.0,
    "fat_g": 14.4,
    "fibre_g": 0.0,
    "folate_ug": 70.0,
    "iron_mg": 3.01,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 201.0,
    "protein_g": 4.4,
    "salt_g": 0.2475,
    "sat_fat_g": 7.49,
    "sodium_mg": 99.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 617.0,
    "vitamin_c_mg": 20.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-769",
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
