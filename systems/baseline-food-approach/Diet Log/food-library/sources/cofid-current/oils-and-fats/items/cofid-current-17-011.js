/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Beef. 6 samples of the same brand",
  "id": "cofid-current-17-011",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Suet, shredded",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 12.1,
    "energy_kcal": 826.0,
    "fat_g": 86.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.0,
    "salt_g": 0.0,
    "sat_fat_g": 49.9,
    "sodium_mg": 0.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.5,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-011",
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
