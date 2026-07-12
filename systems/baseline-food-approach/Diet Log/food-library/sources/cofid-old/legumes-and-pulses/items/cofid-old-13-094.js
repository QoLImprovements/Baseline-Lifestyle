/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "10 cans, 2 brands. Rinsed",
  "id": "cofid-old-13-094",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, lilva, canned, drained",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 10.1,
    "energy_kcal": 68.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 60.0,
    "iron_mg": 2.7,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 82.0,
    "protein_g": 6.7,
    "salt_g": 0.875,
    "sat_fat_g": 0.1,
    "sodium_mg": 350.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-094",
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
