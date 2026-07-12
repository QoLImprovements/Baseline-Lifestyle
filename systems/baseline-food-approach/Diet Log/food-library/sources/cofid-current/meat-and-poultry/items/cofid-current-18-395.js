/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Mixed sample including heart, liver, gizzard and neck",
  "id": "cofid-current-18-395",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Giblets, turkey, boiled",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 0.0,
    "energy_kcal": 192.0,
    "fat_g": 8.8,
    "fibre_g": 0.0,
    "folate_ug": 330.0,
    "iron_mg": 5.8,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 210.0,
    "protein_g": 28.1,
    "salt_g": 0.1575,
    "sat_fat_g": 0.0,
    "sodium_mg": 63.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3100.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-395",
  "state": "Boiled",
  "subcategory": "MG",
  "tags": [
    "boiled",
    "meat-and-poultry",
    "mg"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
