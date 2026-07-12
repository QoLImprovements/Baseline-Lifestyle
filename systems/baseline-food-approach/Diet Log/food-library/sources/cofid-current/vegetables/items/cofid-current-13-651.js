/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "11 samples, UK and imported. Cut into chunks and boiled for 10-30 minutes",
  "id": "cofid-current-13-651",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Aubergine, flesh and skin, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 1.8,
    "energy_kcal": 14.0,
    "fat_g": 0.5,
    "fibre_g": 1.8,
    "folate_ug": 7.0,
    "iron_mg": 0.17,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 136.0,
    "protein_g": 0.7,
    "salt_g": 0.0025,
    "sat_fat_g": 0.13,
    "sodium_mg": 1.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-651",
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
