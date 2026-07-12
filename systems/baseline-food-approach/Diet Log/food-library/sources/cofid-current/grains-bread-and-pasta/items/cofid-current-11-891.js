/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "8 samples, 5 products",
  "id": "cofid-current-11-891",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flour, wheat, wholemeal, self raising",
  "nutritionPerBasis": {
    "calcium_mg": 333.0,
    "carbs_g": 69.3,
    "energy_kcal": 359.0,
    "fat_g": 1.9,
    "fibre_g": 0.0,
    "folate_ug": 30.0,
    "iron_mg": 2.81,
    "magnesium_mg": 87.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 777.0,
    "potassium_mg": 362.0,
    "protein_g": 10.8,
    "salt_g": 0.9775,
    "sat_fat_g": 0.0,
    "sodium_mg": 391.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-891",
  "state": "Unspecified",
  "subcategory": "AA",
  "tags": [
    "aa",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
