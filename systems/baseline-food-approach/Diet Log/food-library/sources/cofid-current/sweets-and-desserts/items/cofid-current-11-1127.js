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
  "id": "cofid-current-11-1127",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Brownies, chocolate, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 54.3,
    "energy_kcal": 506.0,
    "fat_g": 30.8,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 1.75,
    "magnesium_mg": 60.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 135.0,
    "potassium_mg": 217.0,
    "protein_g": 6.2,
    "salt_g": 0.4675,
    "sat_fat_g": 16.43,
    "sodium_mg": 187.0,
    "sugar_g": 46.1,
    "vitamin_a_ug": 256.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.27,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1127",
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
