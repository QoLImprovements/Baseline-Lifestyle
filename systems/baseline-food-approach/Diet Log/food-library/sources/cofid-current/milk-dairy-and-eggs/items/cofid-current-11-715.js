/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, including farfalle, spaghetti, penne, lasagne, tagliatelle",
  "id": "cofid-current-11-715",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta, egg, white, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 74.8,
    "energy_kcal": 365.0,
    "fat_g": 3.6,
    "fibre_g": 3.9,
    "folate_ug": 35.0,
    "iron_mg": 1.75,
    "magnesium_mg": 45.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 210.0,
    "potassium_mg": 246.0,
    "protein_g": 12.9,
    "salt_g": 0.1275,
    "sat_fat_g": 0.89,
    "sodium_mg": 51.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-715",
  "state": "Dried",
  "subcategory": "AD",
  "tags": [
    "ad",
    "dried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
