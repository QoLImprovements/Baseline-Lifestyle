/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Pakistani dish. Recipe from literature sources",
  "id": "cofid-current-15-687",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, pea, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 9.3,
    "energy_kcal": 363.0,
    "fat_g": 34.6,
    "fibre_g": 3.8,
    "folate_ug": 21.0,
    "iron_mg": 2.31,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 299.0,
    "protein_g": 5.0,
    "salt_g": 0.765,
    "sat_fat_g": 21.58,
    "sodium_mg": 306.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 485.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 26.84
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-687",
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
