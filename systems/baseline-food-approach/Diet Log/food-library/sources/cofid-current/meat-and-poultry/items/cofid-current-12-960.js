/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from egg white, raw (12-938) and old code (17-414)",
  "id": "cofid-current-12-960",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Eggs, chicken, white, dried",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 0.0,
    "energy_kcal": 327.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 76.0,
    "iron_mg": 0.08,
    "magnesium_mg": 94.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 1126.0,
    "protein_g": 81.7,
    "salt_g": 3.4975,
    "sat_fat_g": 0.0,
    "sodium_mg": 1399.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-960",
  "state": "Dried",
  "subcategory": "CA",
  "tags": [
    "ca",
    "dried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
