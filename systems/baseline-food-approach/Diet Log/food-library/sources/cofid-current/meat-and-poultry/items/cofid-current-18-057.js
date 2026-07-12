/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 85% lean and 14% fat",
  "id": "cofid-current-18-057",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef, silverside, pot-roasted, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 247.0,
    "fat_g": 13.7,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 2.5,
    "magnesium_mg": 21.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 200.0,
    "potassium_mg": 290.0,
    "protein_g": 31.0,
    "salt_g": 0.135,
    "sat_fat_g": 5.6,
    "sodium_mg": 54.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-057",
  "state": "Roasted",
  "subcategory": "MAC",
  "tags": [
    "mac",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
