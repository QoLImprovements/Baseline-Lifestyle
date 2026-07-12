/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "g",
  "description": "10 samples, with and without hulls",
  "id": "cofid-current-14-844",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sesame seeds",
  "nutritionPerBasis": {
    "calcium_mg": 670.0,
    "carbs_g": 0.9,
    "energy_kcal": 598.0,
    "fat_g": 58.0,
    "fibre_g": 0.0,
    "folate_ug": 97.0,
    "iron_mg": 10.4,
    "magnesium_mg": 370.0,
    "omega3_g": 0.15,
    "phosphorus_mg": 720.0,
    "potassium_mg": 570.0,
    "protein_g": 18.2,
    "salt_g": 0.05,
    "sat_fat_g": 10.48,
    "sodium_mg": 20.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.53,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-844",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
