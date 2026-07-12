/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 18-365",
  "id": "cofid-current-18-366",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Turkey, drumsticks, roasted, meat and skin, weighed with bone",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 134.0,
    "fat_g": 6.1,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 1.0,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 165.0,
    "potassium_mg": 220.0,
    "protein_g": 19.7,
    "salt_g": 0.1875,
    "sat_fat_g": 1.8,
    "sodium_mg": 75.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-366",
  "state": "Roasted",
  "subcategory": "MCO",
  "tags": [
    "mco",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
