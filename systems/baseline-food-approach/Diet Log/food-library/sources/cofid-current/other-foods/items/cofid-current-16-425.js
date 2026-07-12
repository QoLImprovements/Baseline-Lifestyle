/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Small, medium and large from 3 fishing areas",
  "id": "cofid-current-16-425",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Langoustine, boiled",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 0.0,
    "energy_kcal": 86.0,
    "fat_g": 0.8,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.68,
    "magnesium_mg": 53.0,
    "omega3_g": 0.17,
    "phosphorus_mg": 197.0,
    "potassium_mg": 214.0,
    "protein_g": 19.7,
    "salt_g": 0.54,
    "sat_fat_g": 0.15,
    "sodium_mg": 216.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.55,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-425",
  "state": "Boiled",
  "subcategory": "JK",
  "tags": [
    "boiled",
    "jk",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
