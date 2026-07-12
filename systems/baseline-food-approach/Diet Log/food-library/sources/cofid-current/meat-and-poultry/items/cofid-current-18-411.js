/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-current-18-411",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Liver, chicken, raw",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.0,
    "energy_kcal": 92.0,
    "fat_g": 2.3,
    "fibre_g": 0.0,
    "folate_ug": 995.0,
    "iron_mg": 9.2,
    "magnesium_mg": 19.0,
    "omega3_g": 0.11,
    "phosphorus_mg": 280.0,
    "potassium_mg": 260.0,
    "protein_g": 17.7,
    "salt_g": 0.19,
    "sat_fat_g": 0.7,
    "sodium_mg": 76.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 9700.0,
    "vitamin_c_mg": 28.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-411",
  "state": "Raw",
  "subcategory": "MG",
  "tags": [
    "meat-and-poultry",
    "mg",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
