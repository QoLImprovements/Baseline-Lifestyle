/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, 3 brands",
  "id": "cofid-old-13-160",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Asparagus, canned, re-heated, drained",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 1.5,
    "energy_kcal": 24.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 100.0,
    "iron_mg": 0.9,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 170.0,
    "protein_g": 3.4,
    "salt_g": 0.85,
    "sat_fat_g": 0.1,
    "sodium_mg": 340.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 1.16,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-160",
  "state": "Canned",
  "subcategory": "DG",
  "tags": [
    "canned",
    "dg",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
