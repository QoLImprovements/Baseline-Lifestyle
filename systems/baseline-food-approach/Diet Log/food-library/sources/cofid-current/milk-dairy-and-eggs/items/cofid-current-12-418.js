/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Samples taken in June and September",
  "id": "cofid-current-12-418",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, semi-skimmed, pasteurised, summer and autumn",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 4.5,
    "energy_kcal": 46.0,
    "fat_g": 1.7,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.02,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 152.0,
    "protein_g": 3.5,
    "salt_g": 0.1075,
    "sat_fat_g": 1.01,
    "sodium_mg": 43.0,
    "sugar_g": 4.5,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-418",
  "state": "Unspecified",
  "subcategory": "BAH",
  "tags": [
    "bah",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
