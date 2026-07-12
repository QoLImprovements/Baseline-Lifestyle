/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "30 samples from 2 herds and literature sources",
  "id": "cofid-current-12-329",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, sheeps, raw",
  "nutritionPerBasis": {
    "calcium_mg": 170.0,
    "carbs_g": 5.1,
    "energy_kcal": 93.0,
    "fat_g": 5.8,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.03,
    "magnesium_mg": 18.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 150.0,
    "potassium_mg": 120.0,
    "protein_g": 5.4,
    "salt_g": 0.11,
    "sat_fat_g": 3.58,
    "sodium_mg": 44.0,
    "sugar_g": 5.1,
    "vitamin_a_ug": 83.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-329",
  "state": "Raw",
  "subcategory": "BC",
  "tags": [
    "bc",
    "milk-dairy-and-eggs",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
