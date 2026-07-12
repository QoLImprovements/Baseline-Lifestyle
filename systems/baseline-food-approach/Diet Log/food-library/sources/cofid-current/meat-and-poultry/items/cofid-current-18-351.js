/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "21 samples",
  "id": "cofid-current-18-351",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Turkey, skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 332.0,
    "fat_g": 30.7,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.7,
    "magnesium_mg": 13.0,
    "omega3_g": 0.9,
    "phosphorus_mg": 130.0,
    "potassium_mg": 180.0,
    "protein_g": 14.0,
    "salt_g": 0.1675,
    "sat_fat_g": 10.1,
    "sodium_mg": 67.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-351",
  "state": "Raw",
  "subcategory": "MCO",
  "tags": [
    "mco",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
