/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "19 samples",
  "id": "cofid-current-18-070",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef, sirloin steak, grilled medium-rare, lean",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 176.0,
    "fat_g": 7.7,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 1.4,
    "magnesium_mg": 24.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 220.0,
    "potassium_mg": 370.0,
    "protein_g": 26.6,
    "salt_g": 0.1625,
    "sat_fat_g": 3.4,
    "sodium_mg": 65.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-070",
  "state": "Grilled",
  "subcategory": "MAC",
  "tags": [
    "grilled",
    "mac",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
