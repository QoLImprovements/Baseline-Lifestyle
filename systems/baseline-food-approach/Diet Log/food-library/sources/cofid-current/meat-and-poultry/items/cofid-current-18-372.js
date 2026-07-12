/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples from dressed carcase",
  "id": "cofid-current-18-372",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Duck, roasted, meat only",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 195.0,
    "fat_g": 10.4,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 2.7,
    "magnesium_mg": 20.0,
    "omega3_g": 0.11,
    "phosphorus_mg": 200.0,
    "potassium_mg": 270.0,
    "protein_g": 25.3,
    "salt_g": 0.24,
    "sat_fat_g": 3.3,
    "sodium_mg": 96.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-372",
  "state": "Roasted",
  "subcategory": "MCC",
  "tags": [
    "mcc",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
