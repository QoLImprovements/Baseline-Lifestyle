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
  "id": "cofid-current-11-1046",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, chocolate, not filled, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 51.3,
    "energy_kcal": 438.0,
    "fat_g": 24.1,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 1.8,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 205.0,
    "potassium_mg": 200.0,
    "protein_g": 7.3,
    "salt_g": 0.8775,
    "sat_fat_g": 8.28,
    "sodium_mg": 351.0,
    "sugar_g": 28.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.31
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1046",
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
