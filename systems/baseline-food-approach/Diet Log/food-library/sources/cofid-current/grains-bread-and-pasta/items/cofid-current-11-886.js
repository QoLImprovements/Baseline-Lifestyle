/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "14 samples, 12 products",
  "id": "cofid-current-11-886",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flour, wheat, white, plain, soft",
  "nutritionPerBasis": {
    "calcium_mg": 96.0,
    "carbs_g": 80.9,
    "energy_kcal": 352.0,
    "fat_g": 1.4,
    "fibre_g": 4.0,
    "folate_ug": 16.0,
    "iron_mg": 1.94,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 114.0,
    "potassium_mg": 175.0,
    "protein_g": 9.1,
    "salt_g": 0.005,
    "sat_fat_g": 0.44,
    "sodium_mg": 2.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 0.76
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-886",
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
