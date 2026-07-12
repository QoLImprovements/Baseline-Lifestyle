/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products",
  "id": "cofid-current-11-727",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta, egg, white, tagliatelle, fresh, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 30.6,
    "energy_kcal": 152.0,
    "fat_g": 1.6,
    "fibre_g": 2.0,
    "folate_ug": 6.0,
    "iron_mg": 0.6,
    "magnesium_mg": 16.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 76.0,
    "potassium_mg": 40.0,
    "protein_g": 5.8,
    "salt_g": 0.0225,
    "sat_fat_g": 0.38,
    "sodium_mg": 9.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-727",
  "state": "Boiled",
  "subcategory": "AD",
  "tags": [
    "ad",
    "boiled",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
