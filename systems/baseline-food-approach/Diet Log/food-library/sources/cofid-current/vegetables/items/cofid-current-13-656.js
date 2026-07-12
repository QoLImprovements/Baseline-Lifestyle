/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, UK and imported, end and top trimmed",
  "id": "cofid-current-13-656",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Radish, red, flesh and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 1.4,
    "energy_kcal": 12.0,
    "fat_g": 0.4,
    "fibre_g": 1.1,
    "folate_ug": 38.0,
    "iron_mg": 0.19,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 209.0,
    "protein_g": 0.7,
    "salt_g": 0.0525,
    "sat_fat_g": 0.2,
    "sodium_mg": 21.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-656",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
