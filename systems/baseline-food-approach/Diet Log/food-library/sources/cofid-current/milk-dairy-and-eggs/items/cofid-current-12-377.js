/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "6 samples, 4 brands, including peach, apricot, strawberry and blackcurrant, made with whole milk",
  "id": "cofid-current-12-377",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yogurt, Greek style, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 11.2,
    "energy_kcal": 137.0,
    "fat_g": 8.4,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.16,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 136.0,
    "potassium_mg": 218.0,
    "protein_g": 4.8,
    "salt_g": 0.16,
    "sat_fat_g": 5.57,
    "sodium_mg": 64.0,
    "sugar_g": 10.5,
    "vitamin_a_ug": 115.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-377",
  "state": "Unspecified",
  "subcategory": "BN",
  "tags": [
    "bn",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
