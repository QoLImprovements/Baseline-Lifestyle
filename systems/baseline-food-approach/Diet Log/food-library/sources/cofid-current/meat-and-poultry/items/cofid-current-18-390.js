/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Haunch",
  "id": "cofid-current-18-390",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Venison, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 103.0,
    "fat_g": 1.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 3.3,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 210.0,
    "potassium_mg": 340.0,
    "protein_g": 22.2,
    "salt_g": 0.1375,
    "sat_fat_g": 0.8,
    "sodium_mg": 55.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-390",
  "state": "Raw",
  "subcategory": "MEE",
  "tags": [
    "meat-and-poultry",
    "mee",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
