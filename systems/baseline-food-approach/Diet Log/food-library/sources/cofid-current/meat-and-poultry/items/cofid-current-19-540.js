/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "7 samples, 6 brands. 95-96% meat",
  "id": "cofid-current-19-540",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, chicken tandoori, retail, reheated",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 2.0,
    "energy_kcal": 214.0,
    "fat_g": 10.8,
    "fibre_g": 0.8,
    "folate_ug": 16.0,
    "iron_mg": 1.8,
    "magnesium_mg": 36.0,
    "omega3_g": 0.17,
    "phosphorus_mg": 280.0,
    "potassium_mg": 470.0,
    "protein_g": 27.4,
    "salt_g": 0.0,
    "sat_fat_g": 3.3,
    "sodium_mg": 0.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.49,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-540",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "meat-and-poultry",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
