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
  "id": "cofid-current-11-1090",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, lardy, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 104.0,
    "carbs_g": 53.7,
    "energy_kcal": 369.0,
    "fat_g": 15.7,
    "fibre_g": 2.3,
    "folate_ug": 29.0,
    "iron_mg": 1.29,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 175.0,
    "protein_g": 6.7,
    "salt_g": 0.045,
    "sat_fat_g": 6.44,
    "sodium_mg": 18.0,
    "sugar_g": 10.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1090",
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
