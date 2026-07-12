/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe from review of recipe collection.",
  "id": "cofid-current-15-643",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Nut roast, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 76.0,
    "carbs_g": 18.8,
    "energy_kcal": 335.0,
    "fat_g": 23.5,
    "fibre_g": 0.0,
    "folate_ug": 89.0,
    "iron_mg": 2.07,
    "magnesium_mg": 114.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 260.0,
    "potassium_mg": 419.0,
    "protein_g": 13.2,
    "salt_g": 0.385,
    "sat_fat_g": 3.63,
    "sodium_mg": 154.0,
    "sugar_g": 4.1,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 6.56,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-643",
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
