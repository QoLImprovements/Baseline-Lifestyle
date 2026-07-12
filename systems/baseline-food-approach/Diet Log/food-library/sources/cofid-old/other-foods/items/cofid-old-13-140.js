/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 7 brands",
  "id": "cofid-old-13-140",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peas, processed, canned, re-heated, drained",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 17.5,
    "energy_kcal": 99.0,
    "fat_g": 0.7,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.8,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 150.0,
    "protein_g": 6.9,
    "salt_g": 0.95,
    "sat_fat_g": 0.1,
    "sodium_mg": 380.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-140",
  "state": "Canned",
  "subcategory": "DF",
  "tags": [
    "canned",
    "df",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
