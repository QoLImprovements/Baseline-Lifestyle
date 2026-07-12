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
  "id": "cofid-current-18-409",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Liver, calf, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.0,
    "energy_kcal": 104.0,
    "fat_g": 3.4,
    "fibre_g": 0.0,
    "folate_ug": 155.0,
    "iron_mg": 11.5,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 320.0,
    "potassium_mg": 310.0,
    "protein_g": 18.3,
    "salt_g": 0.1775,
    "sat_fat_g": 1.0,
    "sodium_mg": 71.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 18800.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-409",
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
