/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe. Greek dish. Spinach, leek, feta cheese and egg pie. Recipe from a personal collection",
  "id": "cofid-current-15-840",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, spinach, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 194.0,
    "carbs_g": 8.6,
    "energy_kcal": 177.0,
    "fat_g": 13.3,
    "fibre_g": 0.0,
    "folate_ug": 45.0,
    "iron_mg": 1.8,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 406.0,
    "protein_g": 6.2,
    "salt_g": 0.8175,
    "sat_fat_g": 5.62,
    "sodium_mg": 327.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 388.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 1.84,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-840",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
