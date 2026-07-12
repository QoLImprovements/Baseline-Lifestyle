/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "11 samples, imported. Tops and tails removed, boiled for 4-6 minutes",
  "id": "cofid-current-13-652",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Okra, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 1.9,
    "energy_kcal": 16.0,
    "fat_g": 0.2,
    "fibre_g": 3.1,
    "folate_ug": 46.0,
    "iron_mg": 0.39,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 213.0,
    "protein_g": 1.8,
    "salt_g": 0.0125,
    "sat_fat_g": 0.07,
    "sodium_mg": 5.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 77.0,
    "vitamin_c_mg": 16.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-652",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
