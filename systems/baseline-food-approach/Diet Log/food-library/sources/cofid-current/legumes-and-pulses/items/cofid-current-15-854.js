/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe. Mashed kidney bean dish. Recipe from review of recipe collection",
  "id": "cofid-current-15-854",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Re-fried beans",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 15.0,
    "energy_kcal": 169.0,
    "fat_g": 8.6,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 2.13,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 366.0,
    "protein_g": 7.1,
    "salt_g": 0.2175,
    "sat_fat_g": 2.54,
    "sodium_mg": 87.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-854",
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
