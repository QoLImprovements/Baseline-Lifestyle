/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "10 cans, 4 brands",
  "id": "cofid-old-13-069",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, broad, canned, re-heated, drained",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 12.7,
    "energy_kcal": 87.0,
    "fat_g": 0.7,
    "fibre_g": 0.0,
    "folate_ug": 47.0,
    "iron_mg": 1.7,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 200.0,
    "protein_g": 8.3,
    "salt_g": 0.725,
    "sat_fat_g": 0.1,
    "sodium_mg": 290.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-069",
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
