/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "20 samples, core removed. Salt added",
  "id": "cofid-current-18-408",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Kidney, pig, stewed",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 153.0,
    "fat_g": 6.1,
    "fibre_g": 0.0,
    "folate_ug": 43.0,
    "iron_mg": 6.4,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 330.0,
    "potassium_mg": 190.0,
    "protein_g": 24.4,
    "salt_g": 0.925,
    "sat_fat_g": 2.0,
    "sodium_mg": 370.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-408",
  "state": "Unspecified",
  "subcategory": "MG",
  "tags": [
    "meat-and-poultry",
    "mg",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
