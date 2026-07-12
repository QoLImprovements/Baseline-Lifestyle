/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-current-18-072",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef, sirloin steak, grilled well-done, lean",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 225.0,
    "fat_g": 9.9,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 2.7,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 290.0,
    "potassium_mg": 470.0,
    "protein_g": 33.9,
    "salt_g": 0.2025,
    "sat_fat_g": 4.4,
    "sodium_mg": 81.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-072",
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
