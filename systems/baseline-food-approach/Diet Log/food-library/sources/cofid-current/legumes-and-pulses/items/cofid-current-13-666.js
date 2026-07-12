/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, canned in water, no added salt. Heated for 3-5 minutes before draining",
  "id": "cofid-current-13-666",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, cannellini, canned, re-heated, drained",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 15.9,
    "energy_kcal": 104.0,
    "fat_g": 1.6,
    "fibre_g": 6.8,
    "folate_ug": 8.0,
    "iron_mg": 1.9,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 128.0,
    "potassium_mg": 299.0,
    "protein_g": 7.6,
    "salt_g": 0.0175,
    "sat_fat_g": 0.27,
    "sodium_mg": 7.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-666",
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
