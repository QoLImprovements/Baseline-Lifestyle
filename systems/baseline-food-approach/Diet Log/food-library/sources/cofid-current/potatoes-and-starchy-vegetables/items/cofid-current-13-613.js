/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples with fatty acids calculated from beef dripping",
  "id": "cofid-current-13-613",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato chips, fried in beef dripping, from takeaway fish and chip shops",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 33.2,
    "energy_kcal": 214.0,
    "fat_g": 8.4,
    "fibre_g": 3.2,
    "folate_ug": 46.0,
    "iron_mg": 0.72,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 804.0,
    "protein_g": 3.5,
    "salt_g": 0.04,
    "sat_fat_g": 4.2,
    "sodium_mg": 16.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-613",
  "state": "Fried",
  "subcategory": "DAR",
  "tags": [
    "dar",
    "fried",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
