/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples, spicy yellow lentil stew",
  "id": "cofid-current-12-467",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sambar, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 7.7,
    "energy_kcal": 49.0,
    "fat_g": 0.9,
    "fibre_g": 2.4,
    "folate_ug": 11.0,
    "iron_mg": 0.81,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 251.0,
    "protein_g": 3.1,
    "salt_g": 1.11,
    "sat_fat_g": 0.17,
    "sodium_mg": 444.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-467",
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
