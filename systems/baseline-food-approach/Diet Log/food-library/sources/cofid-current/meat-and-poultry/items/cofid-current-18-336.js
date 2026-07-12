/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 18-335",
  "id": "cofid-current-18-336",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken, drumsticks, roasted, meat and skin, weighed with bone",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 116.0,
    "fat_g": 5.7,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.6,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 180.0,
    "protein_g": 16.2,
    "salt_g": 0.2,
    "sat_fat_g": 1.5,
    "sodium_mg": 80.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-336",
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
