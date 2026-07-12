/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products, frozen and chilled, including generic vegetable curry, korma, dhansak and jalfrezi",
  "id": "cofid-current-15-619",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, vegetable, ready meal, without rice, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 8.4,
    "energy_kcal": 94.0,
    "fat_g": 6.0,
    "fibre_g": 1.8,
    "folate_ug": 56.0,
    "iron_mg": 0.83,
    "magnesium_mg": 19.0,
    "omega3_g": 0.32,
    "phosphorus_mg": 47.0,
    "potassium_mg": 259.0,
    "protein_g": 2.1,
    "salt_g": 0.5,
    "sat_fat_g": 1.89,
    "sodium_mg": 200.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 112.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.97,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-619",
  "state": "Cooked",
  "subcategory": "DR",
  "tags": [
    "cooked",
    "dr",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
