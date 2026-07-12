/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "10 cans (Batchelors). Simmered 15 minutes",
  "id": "cofid-old-13-079",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, chilli, canned, re-heated",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 12.2,
    "energy_kcal": 70.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.6,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 310.0,
    "protein_g": 4.9,
    "salt_g": 1.475,
    "sat_fat_g": 0.1,
    "sodium_mg": 590.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-079",
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
