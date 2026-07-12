/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Analytical and literature sources. Ref. Posati and Orr (1976)",
  "id": "cofid-current-12-920",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Eggs, duck, whole, raw",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 0.0,
    "energy_kcal": 163.0,
    "fat_g": 11.8,
    "fibre_g": 0.0,
    "folate_ug": 80.0,
    "iron_mg": 2.9,
    "magnesium_mg": 16.0,
    "omega3_g": 0.2,
    "phosphorus_mg": 200.0,
    "potassium_mg": 190.0,
    "protein_g": 14.3,
    "salt_g": 0.3,
    "sat_fat_g": 2.9,
    "sodium_mg": 120.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 560.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-920",
  "state": "Raw",
  "subcategory": "CA",
  "tags": [
    "ca",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
