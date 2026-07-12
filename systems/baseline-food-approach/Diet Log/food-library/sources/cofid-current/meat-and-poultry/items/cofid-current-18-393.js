/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Mixed sample including heart, liver and gizzard",
  "id": "cofid-current-18-393",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Giblets, chicken, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 142.0,
    "fat_g": 8.2,
    "fibre_g": 0.0,
    "folate_ug": 530.0,
    "iron_mg": 6.7,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 250.0,
    "protein_g": 17.1,
    "salt_g": 0.205,
    "sat_fat_g": 0.0,
    "sodium_mg": 82.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5500.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-393",
  "state": "Raw",
  "subcategory": "MG",
  "tags": [
    "meat-and-poultry",
    "mg",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
