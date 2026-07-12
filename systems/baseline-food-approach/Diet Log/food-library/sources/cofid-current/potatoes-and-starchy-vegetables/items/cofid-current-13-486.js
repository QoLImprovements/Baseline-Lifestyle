/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "5 samples, including McDonald's, Burger King, Wimpy, KFC",
  "id": "cofid-current-13-486",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato chips, fine cut, from fast food outlets",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 39.7,
    "energy_kcal": 290.0,
    "fat_g": 14.2,
    "fibre_g": 3.8,
    "folate_ug": 38.0,
    "iron_mg": 0.72,
    "magnesium_mg": 29.0,
    "omega3_g": 0.42,
    "phosphorus_mg": 143.0,
    "potassium_mg": 544.0,
    "protein_g": 3.5,
    "salt_g": 0.4825,
    "sat_fat_g": 2.5,
    "sodium_mg": 193.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 3.28,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-486",
  "state": "Unspecified",
  "subcategory": "DAP",
  "tags": [
    "dap",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
