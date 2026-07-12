/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-15-720",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chilli, Quorn, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 6.9,
    "energy_kcal": 83.0,
    "fat_g": 3.6,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.76,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 211.0,
    "protein_g": 5.3,
    "salt_g": 0.2525,
    "sat_fat_g": 0.39,
    "sodium_mg": 101.0,
    "sugar_g": 3.5,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 1.34,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-720",
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
