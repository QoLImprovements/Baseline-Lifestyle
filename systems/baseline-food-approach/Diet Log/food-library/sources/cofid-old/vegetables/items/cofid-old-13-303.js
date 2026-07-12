/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, 6 brands. Rinsed",
  "id": "cofid-old-13-303",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Okra, canned, drained",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 2.5,
    "energy_kcal": 21.0,
    "fat_g": 0.7,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 5.4,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 110.0,
    "protein_g": 1.4,
    "salt_g": 1.1,
    "sat_fat_g": 0.2,
    "sodium_mg": 440.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-303",
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
