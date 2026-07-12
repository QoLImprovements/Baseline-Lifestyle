/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "9 samples, sampled in spring and autumn",
  "id": "cofid-current-12-495",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Paneer",
  "nutritionPerBasis": {
    "calcium_mg": 537.0,
    "carbs_g": 0.9,
    "energy_kcal": 328.0,
    "fat_g": 24.5,
    "fibre_g": 0.0,
    "folate_ug": 25.0,
    "iron_mg": 0.0,
    "magnesium_mg": 23.0,
    "omega3_g": 0.19,
    "phosphorus_mg": 383.0,
    "potassium_mg": 69.0,
    "protein_g": 26.0,
    "salt_g": 0.0475,
    "sat_fat_g": 15.43,
    "sodium_mg": 19.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 254.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-495",
  "state": "Unspecified",
  "subcategory": "BL",
  "tags": [
    "bl",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
