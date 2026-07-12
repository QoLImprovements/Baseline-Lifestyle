/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "22 samples, including UK grown and imported, pre-packed and loose",
  "id": "cofid-current-13-495",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potatoes, new and salad, boiled in unsalted water, flesh and skin",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 14.9,
    "energy_kcal": 68.0,
    "fat_g": 0.1,
    "fibre_g": 1.8,
    "folate_ug": 21.0,
    "iron_mg": 0.61,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 377.0,
    "protein_g": 1.8,
    "salt_g": 0.0075,
    "sat_fat_g": 0.04,
    "sodium_mg": 3.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-495",
  "state": "Boiled",
  "subcategory": "DAE",
  "tags": [
    "boiled",
    "dae",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
