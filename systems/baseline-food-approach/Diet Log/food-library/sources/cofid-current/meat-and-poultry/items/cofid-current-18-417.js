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
  "id": "cofid-current-18-417",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Liver, pig, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 113.0,
    "fat_g": 3.1,
    "fibre_g": 0.0,
    "folate_ug": 295.0,
    "iron_mg": 13.9,
    "magnesium_mg": 20.0,
    "omega3_g": 0.15,
    "phosphorus_mg": 390.0,
    "potassium_mg": 300.0,
    "protein_g": 21.3,
    "salt_g": 0.205,
    "sat_fat_g": 1.0,
    "sodium_mg": 82.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 17400.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-417",
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
