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
  "id": "cofid-current-11-1026",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, apple, wholemeal, one crust, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 29.9,
    "energy_kcal": 190.0,
    "fat_g": 7.7,
    "fibre_g": 2.8,
    "folate_ug": 5.0,
    "iron_mg": 0.52,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 122.0,
    "protein_g": 2.3,
    "salt_g": 0.1625,
    "sat_fat_g": 4.6,
    "sodium_mg": 65.0,
    "sugar_g": 18.0,
    "vitamin_a_ug": 92.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1026",
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
