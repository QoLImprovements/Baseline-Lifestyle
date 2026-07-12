/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "10 cans, 6 brands. Whole and sliced",
  "id": "cofid-old-13-085",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, green/French, canned, re-heated, drained",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 4.1,
    "energy_kcal": 22.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.9,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 110.0,
    "protein_g": 1.5,
    "salt_g": 0.85,
    "sat_fat_g": 0.0,
    "sodium_mg": 340.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-085",
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
