/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 4 brands",
  "id": "cofid-current-11-1022",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pudding, Christmas, retail",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 56.3,
    "energy_kcal": 285.0,
    "fat_g": 6.9,
    "fibre_g": 4.0,
    "folate_ug": 9.0,
    "iron_mg": 1.2,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 340.0,
    "protein_g": 3.0,
    "salt_g": 0.25,
    "sat_fat_g": 3.57,
    "sodium_mg": 100.0,
    "sugar_g": 46.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1022",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
