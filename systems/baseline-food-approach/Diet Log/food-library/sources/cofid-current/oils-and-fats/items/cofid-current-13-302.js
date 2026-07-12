/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Analysis and literature sources. Ends trimmed, sliced and fried 5 minutes",
  "id": "cofid-current-13-302",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Okra, stir-fried in corn oil",
  "nutritionPerBasis": {
    "calcium_mg": 220.0,
    "carbs_g": 4.4,
    "energy_kcal": 269.0,
    "fat_g": 26.1,
    "fibre_g": 0.0,
    "folate_ug": 83.0,
    "iron_mg": 1.5,
    "magnesium_mg": 110.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 480.0,
    "protein_g": 4.3,
    "salt_g": 0.0325,
    "sat_fat_g": 3.3,
    "sodium_mg": 13.0,
    "sugar_g": 3.6,
    "vitamin_a_ug": 94.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 4.5,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-302",
  "state": "Fried",
  "subcategory": "DG",
  "tags": [
    "dg",
    "fried",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
