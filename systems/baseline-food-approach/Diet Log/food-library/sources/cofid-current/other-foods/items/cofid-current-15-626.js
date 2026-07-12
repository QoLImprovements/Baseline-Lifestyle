/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples",
  "id": "cofid-current-15-626",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tinda subji, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 4.1,
    "energy_kcal": 95.0,
    "fat_g": 8.1,
    "fibre_g": 2.8,
    "folate_ug": 6.0,
    "iron_mg": 0.6,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 279.0,
    "protein_g": 1.6,
    "salt_g": 1.02,
    "sat_fat_g": 0.83,
    "sodium_mg": 408.0,
    "sugar_g": 4.1,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 3.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-626",
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
