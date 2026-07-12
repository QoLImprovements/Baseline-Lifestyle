/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 84% lean and 16% fat. No fat removed, not including skin.",
  "id": "cofid-current-18-522",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, loin steaks, raw, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 187.0,
    "fat_g": 11.2,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.41,
    "magnesium_mg": 23.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 188.0,
    "potassium_mg": 362.0,
    "protein_g": 21.4,
    "salt_g": 0.1125,
    "sat_fat_g": 4.16,
    "sodium_mg": 45.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-522",
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
