/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples; smoked and unsmoked, loose and prepacked British, Danish and Dutch bacon",
  "id": "cofid-current-19-497",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bacon rashers, back, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 215.0,
    "fat_g": 16.5,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.4,
    "magnesium_mg": 17.0,
    "omega3_g": 0.24,
    "phosphorus_mg": 150.0,
    "potassium_mg": 300.0,
    "protein_g": 16.5,
    "salt_g": 2.85,
    "sat_fat_g": 6.2,
    "sodium_mg": 1140.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-497",
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
