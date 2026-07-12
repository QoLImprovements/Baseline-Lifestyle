/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "5 samples",
  "id": "cofid-current-15-625",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tori ki subji, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 3.9,
    "energy_kcal": 108.0,
    "fat_g": 9.5,
    "fibre_g": 3.0,
    "folate_ug": 10.0,
    "iron_mg": 1.18,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 382.0,
    "protein_g": 1.9,
    "salt_g": 1.1475,
    "sat_fat_g": 1.03,
    "sodium_mg": 459.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 3.74,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-625",
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
