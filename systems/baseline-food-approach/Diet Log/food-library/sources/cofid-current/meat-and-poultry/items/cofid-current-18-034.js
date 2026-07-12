/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 78% lean and 22% fat",
  "id": "cofid-current-18-034",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef, fore-rib/rib-roast, roasted, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.0,
    "energy_kcal": 300.0,
    "fat_g": 20.4,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 1.8,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 320.0,
    "protein_g": 29.1,
    "salt_g": 0.135,
    "sat_fat_g": 9.2,
    "sodium_mg": 54.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-034",
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
