/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "22 samples, autumn and winter, UK grown and imported, pre-packed and loose",
  "id": "cofid-current-13-525",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pepper, capsicum, red, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 3.4,
    "energy_kcal": 17.0,
    "fat_g": 0.1,
    "fibre_g": 2.4,
    "folate_ug": 26.0,
    "iron_mg": 0.35,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 159.0,
    "protein_g": 0.8,
    "salt_g": 0.0,
    "sat_fat_g": 0.03,
    "sodium_mg": 0.0,
    "sugar_g": 3.3,
    "vitamin_a_ug": 103.0,
    "vitamin_c_mg": 89.0,
    "vitamin_e_mg": 1.03,
    "vitamin_k_ug": 1.6
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-525",
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
