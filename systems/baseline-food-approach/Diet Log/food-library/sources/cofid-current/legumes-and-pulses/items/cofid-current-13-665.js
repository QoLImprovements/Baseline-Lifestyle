/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "6 samples, 4 products, canned in water, no added salt. Heated for 2-5 minutes before draining",
  "id": "cofid-current-13-665",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, haricot, canned, re-heated, drained",
  "nutritionPerBasis": {
    "calcium_mg": 111.0,
    "carbs_g": 15.6,
    "energy_kcal": 96.0,
    "fat_g": 1.0,
    "fibre_g": 6.8,
    "folate_ug": 0.0,
    "iron_mg": 2.29,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 340.0,
    "protein_g": 7.1,
    "salt_g": 0.015,
    "sat_fat_g": 0.2,
    "sodium_mg": 6.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-665",
  "state": "Canned",
  "subcategory": "DB",
  "tags": [
    "canned",
    "db",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
