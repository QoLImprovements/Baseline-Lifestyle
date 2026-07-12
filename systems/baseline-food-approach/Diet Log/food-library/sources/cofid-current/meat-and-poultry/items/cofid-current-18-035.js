/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 18-034",
  "id": "cofid-current-18-035",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef, fore-rib/rib-roast, roasted, lean and fat, weighed with bone",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 252.0,
    "fat_g": 17.1,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 1.5,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 160.0,
    "potassium_mg": 270.0,
    "protein_g": 24.4,
    "salt_g": 0.1075,
    "sat_fat_g": 7.7,
    "sodium_mg": 43.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-035",
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
