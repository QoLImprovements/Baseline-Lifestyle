/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Sweetcorn, onion and mushroom stuffing. Recipe from a review of recipe collection",
  "id": "cofid-current-15-889",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tomatoes, stuffed with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 8.9,
    "energy_kcal": 95.0,
    "fat_g": 6.0,
    "fibre_g": 2.6,
    "folate_ug": 21.0,
    "iron_mg": 0.56,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 405.0,
    "protein_g": 1.7,
    "salt_g": 0.0125,
    "sat_fat_g": 0.47,
    "sodium_mg": 5.0,
    "sugar_g": 7.4,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 2.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-889",
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
