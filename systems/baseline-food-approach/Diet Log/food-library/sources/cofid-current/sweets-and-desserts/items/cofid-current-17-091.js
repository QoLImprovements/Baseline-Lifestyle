/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "14 samples, 5 brands; buttons and bars",
  "id": "cofid-current-17-091",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chocolate, white",
  "nutritionPerBasis": {
    "calcium_mg": 270.0,
    "carbs_g": 58.3,
    "energy_kcal": 529.0,
    "fat_g": 30.9,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.2,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 350.0,
    "protein_g": 8.0,
    "salt_g": 0.275,
    "sat_fat_g": 18.4,
    "sodium_mg": 110.0,
    "sugar_g": 58.3,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-091",
  "state": "Unspecified",
  "subcategory": "SEA",
  "tags": [
    "sea",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
