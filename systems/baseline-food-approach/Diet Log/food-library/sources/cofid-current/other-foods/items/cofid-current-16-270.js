/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples,from stalls and fishmongers. Purchased cooked",
  "id": "cofid-current-16-270",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Winkles, boiled",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 0.0,
    "energy_kcal": 72.0,
    "fat_g": 1.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 10.2,
    "magnesium_mg": 310.0,
    "omega3_g": 0.23,
    "phosphorus_mg": 160.0,
    "potassium_mg": 220.0,
    "protein_g": 15.4,
    "salt_g": 1.875,
    "sat_fat_g": 0.2,
    "sodium_mg": 750.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.9,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-270",
  "state": "Boiled",
  "subcategory": "JM",
  "tags": [
    "boiled",
    "jm",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
