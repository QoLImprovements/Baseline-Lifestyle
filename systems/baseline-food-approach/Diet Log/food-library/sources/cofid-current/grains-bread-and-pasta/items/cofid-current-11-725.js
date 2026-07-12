/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "8 samples, 3 products",
  "id": "cofid-current-11-725",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Noodles, rice, fine, dried, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 21.3,
    "energy_kcal": 89.0,
    "fat_g": 0.2,
    "fibre_g": 1.1,
    "folate_ug": 3.0,
    "iron_mg": 0.1,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 3.0,
    "protein_g": 1.9,
    "salt_g": 0.01,
    "sat_fat_g": 0.05,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-725",
  "state": "Boiled",
  "subcategory": "AD",
  "tags": [
    "ad",
    "boiled",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
