/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "LGC; 9 samples, 4 brands. Rinsed",
  "id": "cofid-old-13-251",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Gourd, kantola, canned, drained",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 3.2,
    "energy_kcal": 26.0,
    "fat_g": 0.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.9,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 150.0,
    "protein_g": 1.6,
    "salt_g": 0.925,
    "sat_fat_g": 0.0,
    "sodium_mg": 370.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 245.0,
    "vitamin_c_mg": 190.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-251",
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
