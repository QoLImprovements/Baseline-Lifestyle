/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 88% lean and 11% fat. Not retail ready cooked",
  "id": "cofid-current-18-060",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef, silverside, salted, boiled, lean",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 184.0,
    "fat_g": 6.9,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 2.0,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 190.0,
    "protein_g": 30.4,
    "salt_g": 2.55,
    "sat_fat_g": 2.5,
    "sodium_mg": 1020.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-060",
  "state": "Boiled",
  "subcategory": "MAC",
  "tags": [
    "boiled",
    "mac",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
