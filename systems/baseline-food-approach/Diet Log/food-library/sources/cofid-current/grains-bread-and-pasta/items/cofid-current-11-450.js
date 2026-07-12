/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "12 Samples, 8 brands including spaghetti, tagliatelle, lasagne, linguine and fusilli",
  "id": "cofid-current-11-450",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta, plain, fresh, boiled",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 31.8,
    "energy_kcal": 159.0,
    "fat_g": 1.5,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.8,
    "magnesium_mg": 19.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 86.0,
    "potassium_mg": 49.0,
    "protein_g": 6.6,
    "salt_g": 0.04,
    "sat_fat_g": 0.28,
    "sodium_mg": 16.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-450",
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
