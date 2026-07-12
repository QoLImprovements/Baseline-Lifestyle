/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "23% trotters and 77% pig tails. Salt added",
  "id": "cofid-current-18-429",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, trotters and tails, boiled with added salt",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 0.0,
    "energy_kcal": 280.0,
    "fat_g": 22.3,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.7,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 30.0,
    "protein_g": 19.8,
    "salt_g": 4.05,
    "sat_fat_g": 0.0,
    "sodium_mg": 1620.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-429",
  "state": "Boiled",
  "subcategory": "MG",
  "tags": [
    "boiled",
    "meat-and-poultry",
    "mg"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
