/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 4 brands. Rinsed",
  "id": "cofid-old-13-253",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Gourd, karela, canned, drained",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 0.8,
    "energy_kcal": 9.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 0.7,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 110.0,
    "protein_g": 0.9,
    "salt_g": 0.775,
    "sat_fat_g": 0.0,
    "sodium_mg": 310.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 14.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-253",
  "state": "Canned",
  "subcategory": "DG",
  "tags": [
    "canned",
    "dg",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
