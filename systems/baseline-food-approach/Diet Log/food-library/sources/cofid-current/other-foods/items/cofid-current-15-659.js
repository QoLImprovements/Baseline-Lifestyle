/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe adapted from literature sources",
  "id": "cofid-current-15-659",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ratatouille, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 3.8,
    "energy_kcal": 82.0,
    "fat_g": 7.0,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 0.49,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 273.0,
    "protein_g": 1.2,
    "salt_g": 0.0075,
    "sat_fat_g": 0.88,
    "sodium_mg": 3.0,
    "sugar_g": 3.3,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 1.77,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-659",
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
