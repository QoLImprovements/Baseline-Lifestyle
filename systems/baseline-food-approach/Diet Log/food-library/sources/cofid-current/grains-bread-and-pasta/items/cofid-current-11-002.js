/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "2 samples from different shops; literature sources",
  "id": "cofid-current-11-002",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Barley, pearl, raw",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 83.6,
    "energy_kcal": 360.0,
    "fat_g": 1.7,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 3.0,
    "magnesium_mg": 65.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 210.0,
    "potassium_mg": 270.0,
    "protein_g": 7.9,
    "salt_g": 0.0075,
    "sat_fat_g": 0.0,
    "sodium_mg": 3.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-002",
  "state": "Raw",
  "subcategory": "AA",
  "tags": [
    "aa",
    "grains-bread-and-pasta",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
