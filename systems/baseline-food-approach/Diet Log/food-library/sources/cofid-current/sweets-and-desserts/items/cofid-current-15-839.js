/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe from Marlow Foods Ltd",
  "id": "cofid-current-15-839",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, Quorn and vegetable",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 13.2,
    "energy_kcal": 174.0,
    "fat_g": 10.4,
    "fibre_g": 3.4,
    "folate_ug": 8.0,
    "iron_mg": 0.57,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 134.0,
    "potassium_mg": 141.0,
    "protein_g": 7.6,
    "salt_g": 0.545,
    "sat_fat_g": 4.88,
    "sodium_mg": 218.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-839",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
