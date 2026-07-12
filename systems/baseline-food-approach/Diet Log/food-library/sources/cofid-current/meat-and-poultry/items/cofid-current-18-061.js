/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 88% lean and 11% fat",
  "id": "cofid-current-18-061",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef, silverside, salted, boiled, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 224.0,
    "fat_g": 12.5,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 1.8,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 170.0,
    "protein_g": 27.9,
    "salt_g": 2.35,
    "sat_fat_g": 4.7,
    "sodium_mg": 940.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-061",
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
