/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "West Indian dish. Spinach and cho cho. Recipe from a personal collection",
  "id": "cofid-current-15-706",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Callaloo and cho cho, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 2.6,
    "energy_kcal": 77.0,
    "fat_g": 6.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.32,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.0,
    "potassium_mg": 348.0,
    "protein_g": 1.9,
    "salt_g": 0.2975,
    "sat_fat_g": 2.84,
    "sodium_mg": 119.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 400.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 229.93
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-706",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
