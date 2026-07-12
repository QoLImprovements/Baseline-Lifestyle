/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "7 samples, 4 brands",
  "id": "cofid-current-12-401",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mousse, chocolate, low fat",
  "nutritionPerBasis": {
    "calcium_mg": 126.0,
    "carbs_g": 18.0,
    "energy_kcal": 123.0,
    "fat_g": 3.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.21,
    "magnesium_mg": 33.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 133.0,
    "potassium_mg": 301.0,
    "protein_g": 5.5,
    "salt_g": 0.1725,
    "sat_fat_g": 2.54,
    "sodium_mg": 69.0,
    "sugar_g": 15.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-401",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
