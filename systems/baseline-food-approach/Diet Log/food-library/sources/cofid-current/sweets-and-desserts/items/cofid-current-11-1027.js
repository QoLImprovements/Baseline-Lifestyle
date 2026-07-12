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
  "id": "cofid-current-11-1027",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, apple, wholemeal, pastry top and bottom, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 33.6,
    "energy_kcal": 254.0,
    "fat_g": 12.7,
    "fibre_g": 3.7,
    "folate_ug": 8.0,
    "iron_mg": 0.78,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 88.0,
    "potassium_mg": 151.0,
    "protein_g": 3.6,
    "salt_g": 0.27,
    "sat_fat_g": 7.68,
    "sodium_mg": 108.0,
    "sugar_g": 13.7,
    "vitamin_a_ug": 154.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 1.07
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1027",
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
