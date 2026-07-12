/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe from review of recipe collection",
  "id": "cofid-current-15-841",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, vegetable, wholemeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 18.0,
    "energy_kcal": 151.0,
    "fat_g": 7.8,
    "fibre_g": 0.0,
    "folate_ug": 39.0,
    "iron_mg": 0.87,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 291.0,
    "protein_g": 3.4,
    "salt_g": 0.265,
    "sat_fat_g": 4.67,
    "sodium_mg": 106.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 315.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-841",
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
