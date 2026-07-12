/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples. Assorted varieties. Simmered 3-7 minutes, based on boiled in salted water",
  "id": "cofid-current-13-543",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vegetables, mixed, frozen, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 6.6,
    "energy_kcal": 42.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 52.0,
    "iron_mg": 0.8,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 130.0,
    "protein_g": 3.3,
    "salt_g": 0.0375,
    "sat_fat_g": 0.0,
    "sodium_mg": 15.0,
    "sugar_g": 3.6,
    "vitamin_a_ug": 420.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-543",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
