/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Fat from five different cuts",
  "id": "cofid-current-19-650",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bacon, fat only, average, raw",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 0.0,
    "energy_kcal": 747.0,
    "fat_g": 80.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.7,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 75.0,
    "protein_g": 4.8,
    "salt_g": 1.05,
    "sat_fat_g": 31.5,
    "sodium_mg": 420.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-650",
  "state": "Raw",
  "subcategory": "MAA",
  "tags": [
    "maa",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
