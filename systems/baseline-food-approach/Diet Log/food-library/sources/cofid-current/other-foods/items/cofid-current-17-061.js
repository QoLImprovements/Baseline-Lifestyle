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
  "id": "cofid-current-17-061",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sugar, Demerara",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 104.5,
    "energy_kcal": 394.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.9,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 3.0,
    "potassium_mg": 48.0,
    "protein_g": 0.5,
    "salt_g": 0.0125,
    "sat_fat_g": 0.0,
    "sodium_mg": 5.0,
    "sugar_g": 104.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-061",
  "state": "Unspecified",
  "subcategory": "SC",
  "tags": [
    "other-foods",
    "sc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
