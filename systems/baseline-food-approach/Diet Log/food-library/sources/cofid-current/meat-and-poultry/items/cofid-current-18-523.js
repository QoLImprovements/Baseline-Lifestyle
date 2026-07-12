/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 94% lean and 6% fat. Subcutaneous fat and skin removed.",
  "id": "cofid-current-18-523",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, loin steaks, raw, lean and fat, trimmed",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 140.0,
    "fat_g": 5.5,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.43,
    "magnesium_mg": 25.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 200.0,
    "potassium_mg": 386.0,
    "protein_g": 22.5,
    "salt_g": 0.1175,
    "sat_fat_g": 2.04,
    "sodium_mg": 47.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-523",
  "state": "Raw",
  "subcategory": "MAG",
  "tags": [
    "mag",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
