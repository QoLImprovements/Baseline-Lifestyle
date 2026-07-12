/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 89% lean and 10% fat",
  "id": "cofid-current-18-079",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef, stewing steak, pressure cooked, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.0,
    "energy_kcal": 217.0,
    "fat_g": 9.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.7,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 220.0,
    "potassium_mg": 290.0,
    "protein_g": 34.0,
    "salt_g": 0.15,
    "sat_fat_g": 3.4,
    "sodium_mg": 60.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-079",
  "state": "Cooked",
  "subcategory": "MAC",
  "tags": [
    "cooked",
    "mac",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
