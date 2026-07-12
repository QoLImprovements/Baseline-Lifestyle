/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "6 samples, 3 brands",
  "id": "cofid-current-17-010",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lard",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 0.0,
    "energy_kcal": 891.0,
    "fat_g": 99.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.1,
    "magnesium_mg": 1.0,
    "omega3_g": 0.51,
    "phosphorus_mg": 3.0,
    "potassium_mg": 1.0,
    "protein_g": 0.0,
    "salt_g": 0.005,
    "sat_fat_g": 40.3,
    "sodium_mg": 2.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-010",
  "state": "Unspecified",
  "subcategory": "OF",
  "tags": [
    "of",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
