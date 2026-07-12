/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 5 brands. Rinsed",
  "id": "cofid-old-13-257",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Gourd, tinda, canned, drained",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 2.6,
    "energy_kcal": 12.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.1,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 41.0,
    "protein_g": 0.6,
    "salt_g": 0.875,
    "sat_fat_g": 0.0,
    "sodium_mg": 350.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-257",
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
