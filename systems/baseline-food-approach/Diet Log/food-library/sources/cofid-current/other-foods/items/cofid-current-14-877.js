/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-current-14-877",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peanuts, kernel only, plain, unsalted",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 12.5,
    "energy_kcal": 564.0,
    "fat_g": 46.0,
    "fibre_g": 0.0,
    "folate_ug": 110.0,
    "iron_mg": 2.5,
    "magnesium_mg": 210.0,
    "omega3_g": 0.35,
    "phosphorus_mg": 430.0,
    "potassium_mg": 670.0,
    "protein_g": 25.8,
    "salt_g": 0.005,
    "sat_fat_g": 8.66,
    "sodium_mg": 2.0,
    "sugar_g": 6.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 10.09,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-877",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
