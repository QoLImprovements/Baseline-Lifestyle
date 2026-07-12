/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 9 brands, no added salt",
  "id": "cofid-current-13-564",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peas, canned in water, re-heated, drained",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 8.0,
    "energy_kcal": 59.0,
    "fat_g": 0.9,
    "fibre_g": 5.3,
    "folate_ug": 25.0,
    "iron_mg": 1.9,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 81.0,
    "potassium_mg": 130.0,
    "protein_g": 5.3,
    "salt_g": 0.0,
    "sat_fat_g": 0.2,
    "sodium_mg": 0.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 89.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 30.4
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-564",
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
