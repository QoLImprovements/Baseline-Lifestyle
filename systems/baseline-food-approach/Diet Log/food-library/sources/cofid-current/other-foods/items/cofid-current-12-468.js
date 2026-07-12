/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "5 samples, black lentil curry",
  "id": "cofid-current-12-468",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Urad dahl, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 8.7,
    "energy_kcal": 81.0,
    "fat_g": 3.2,
    "fibre_g": 2.7,
    "folate_ug": 38.0,
    "iron_mg": 1.2,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.0,
    "potassium_mg": 262.0,
    "protein_g": 4.8,
    "salt_g": 0.835,
    "sat_fat_g": 0.44,
    "sodium_mg": 334.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-468",
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
