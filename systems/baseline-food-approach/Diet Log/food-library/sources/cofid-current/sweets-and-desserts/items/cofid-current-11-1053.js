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
  "id": "cofid-current-11-1053",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, coconut, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 52.6,
    "energy_kcal": 423.0,
    "fat_g": 22.1,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.42,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 251.0,
    "potassium_mg": 175.0,
    "protein_g": 6.7,
    "salt_g": 0.97,
    "sat_fat_g": 10.44,
    "sodium_mg": 388.0,
    "sugar_g": 21.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1053",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
