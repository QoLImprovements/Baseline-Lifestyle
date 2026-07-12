/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 7 brands e.g. Viennetta, Romantica, After Eight",
  "id": "cofid-current-12-385",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ice cream desserts, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 21.0,
    "energy_kcal": 251.0,
    "fat_g": 17.6,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.19,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 234.0,
    "protein_g": 3.5,
    "salt_g": 0.155,
    "sat_fat_g": 14.17,
    "sodium_mg": 62.0,
    "sugar_g": 19.7,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-385",
  "state": "Frozen",
  "subcategory": "BP",
  "tags": [
    "bp",
    "frozen",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
