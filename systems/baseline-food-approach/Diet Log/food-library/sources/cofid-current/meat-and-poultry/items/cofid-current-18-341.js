/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 40% light meat, 47% dark meat and 13% skin from fresh and frozen chicken",
  "id": "cofid-current-18-341",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken, whole, roasted, meat and skin",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 218.0,
    "fat_g": 12.5,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.7,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 220.0,
    "potassium_mg": 320.0,
    "protein_g": 26.3,
    "salt_g": 0.2,
    "sat_fat_g": 3.4,
    "sodium_mg": 80.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-341",
  "state": "Roasted",
  "subcategory": "MCA",
  "tags": [
    "mca",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
