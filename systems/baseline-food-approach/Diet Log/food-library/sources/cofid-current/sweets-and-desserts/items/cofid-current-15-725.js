/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe. West Indian dish. Baked sweetcorn pudding.",
  "id": "cofid-current-15-725",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Corn pudding, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 8.9,
    "energy_kcal": 78.0,
    "fat_g": 2.9,
    "fibre_g": 1.6,
    "folate_ug": 26.0,
    "iron_mg": 0.44,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 173.0,
    "protein_g": 4.7,
    "salt_g": 0.1075,
    "sat_fat_g": 0.98,
    "sodium_mg": 43.0,
    "sugar_g": 5.9,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-725",
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
