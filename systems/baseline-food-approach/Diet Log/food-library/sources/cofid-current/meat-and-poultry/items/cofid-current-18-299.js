/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "6 samples",
  "id": "cofid-current-18-299",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken, corn-fed, raw, dark meat only",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 143.0,
    "fat_g": 7.2,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.9,
    "magnesium_mg": 23.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 200.0,
    "potassium_mg": 300.0,
    "protein_g": 19.5,
    "salt_g": 0.2,
    "sat_fat_g": 2.1,
    "sodium_mg": 80.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-299",
  "state": "Raw",
  "subcategory": "MCA",
  "tags": [
    "mca",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
