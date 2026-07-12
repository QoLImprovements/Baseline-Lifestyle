/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "4 samples, 3 products",
  "id": "cofid-current-11-897",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flour, rye",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 73.5,
    "energy_kcal": 319.0,
    "fat_g": 1.6,
    "fibre_g": 14.1,
    "folate_ug": 60.0,
    "iron_mg": 2.43,
    "magnesium_mg": 85.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 307.0,
    "potassium_mg": 419.0,
    "protein_g": 7.3,
    "salt_g": 0.005,
    "sat_fat_g": 0.22,
    "sodium_mg": 2.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-897",
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
