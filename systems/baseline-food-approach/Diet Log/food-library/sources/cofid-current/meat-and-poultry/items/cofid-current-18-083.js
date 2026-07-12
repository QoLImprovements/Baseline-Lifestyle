/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 85% lean and 13% fat. Meat browned in 1/2 oz of corn oil per 1b meat, covered with 1pt of water per lb, covered and cooked for 2 hours",
  "id": "cofid-current-18-083",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef, stewing steak, frozen, stewed, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 212.0,
    "fat_g": 11.6,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 2.7,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 210.0,
    "protein_g": 26.9,
    "salt_g": 0.11,
    "sat_fat_g": 4.3,
    "sodium_mg": 44.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-083",
  "state": "Frozen",
  "subcategory": "MAC",
  "tags": [
    "frozen",
    "mac",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
