/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, red and black, Drained proportion = 0.61 with stones and 0.47 without stones",
  "id": "cofid-old-14-067",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cherries, canned in syrup, whole contents",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 18.5,
    "energy_kcal": 71.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 2.9,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 120.0,
    "protein_g": 0.5,
    "salt_g": 0.02,
    "sat_fat_g": 0.0,
    "sodium_mg": 8.0,
    "sugar_g": 18.5,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "14-067",
  "state": "Canned",
  "subcategory": "FA",
  "tags": [
    "canned",
    "fa",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
