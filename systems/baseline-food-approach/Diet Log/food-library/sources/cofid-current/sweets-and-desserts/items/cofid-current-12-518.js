/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-12-518",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chocolate nut sundae",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 33.5,
    "energy_kcal": 271.0,
    "fat_g": 15.0,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.36,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 71.0,
    "potassium_mg": 131.0,
    "protein_g": 2.6,
    "salt_g": 0.09,
    "sat_fat_g": 8.94,
    "sodium_mg": 36.0,
    "sugar_g": 29.9,
    "vitamin_a_ug": 203.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-518",
  "state": "Unspecified",
  "subcategory": "BP",
  "tags": [
    "bp",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
