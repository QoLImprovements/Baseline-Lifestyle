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
  "id": "cofid-current-11-1047",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, chocolate, with butter icing, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 53.8,
    "energy_kcal": 452.0,
    "fat_g": 25.2,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.49,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 164.0,
    "potassium_mg": 162.0,
    "protein_g": 5.8,
    "salt_g": 0.835,
    "sat_fat_g": 10.43,
    "sodium_mg": 334.0,
    "sugar_g": 35.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1047",
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
