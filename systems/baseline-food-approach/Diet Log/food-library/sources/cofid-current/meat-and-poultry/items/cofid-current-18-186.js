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
  "id": "cofid-current-18-186",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lamb, stewing, stewed, lean",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 0.0,
    "energy_kcal": 240.0,
    "fat_g": 14.8,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.9,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 160.0,
    "protein_g": 26.6,
    "salt_g": 0.1225,
    "sat_fat_g": 6.5,
    "sodium_mg": 49.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-186",
  "state": "Unspecified",
  "subcategory": "MAE",
  "tags": [
    "mae",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
