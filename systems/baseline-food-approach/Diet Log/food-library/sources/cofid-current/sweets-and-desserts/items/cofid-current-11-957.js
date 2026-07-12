/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Not filled recipe",
  "id": "cofid-current-11-957",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, sponge, fatless, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 53.9,
    "energy_kcal": 292.0,
    "fat_g": 5.6,
    "fibre_g": 1.2,
    "folate_ug": 16.0,
    "iron_mg": 1.62,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 137.0,
    "potassium_mg": 136.0,
    "protein_g": 9.9,
    "salt_g": 0.2275,
    "sat_fat_g": 1.59,
    "sodium_mg": 91.0,
    "sugar_g": 30.6,
    "vitamin_a_ug": 73.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-957",
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
