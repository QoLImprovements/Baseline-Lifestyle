/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "18 samples",
  "id": "cofid-current-18-359",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Turkey, light meat, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.0,
    "energy_kcal": 153.0,
    "fat_g": 2.0,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.5,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 260.0,
    "potassium_mg": 400.0,
    "protein_g": 33.7,
    "salt_g": 0.125,
    "sat_fat_g": 0.7,
    "sodium_mg": 50.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-359",
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
