/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "6 samples, 2 products",
  "id": "cofid-current-11-724",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Noodles, egg, medium, dried, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 35.7,
    "energy_kcal": 166.0,
    "fat_g": 1.0,
    "fibre_g": 3.0,
    "folate_ug": 6.0,
    "iron_mg": 1.11,
    "magnesium_mg": 25.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 89.0,
    "potassium_mg": 75.0,
    "protein_g": 5.8,
    "salt_g": 0.3525,
    "sat_fat_g": 0.15,
    "sodium_mg": 141.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-724",
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
