/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "9 samples, 6 brands including cheese grills and cheese and onion crispbakes",
  "id": "cofid-current-15-657",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vegetable and cheese grill/burger, in crumbs, baked/grilled",
  "nutritionPerBasis": {
    "calcium_mg": 154.0,
    "carbs_g": 23.0,
    "energy_kcal": 240.0,
    "fat_g": 14.0,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.9,
    "magnesium_mg": 20.0,
    "omega3_g": 0.32,
    "phosphorus_mg": 147.0,
    "potassium_mg": 260.0,
    "protein_g": 7.0,
    "salt_g": 0.725,
    "sat_fat_g": 4.64,
    "sodium_mg": 290.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.12,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-657",
  "state": "Baked",
  "subcategory": "DR",
  "tags": [
    "baked",
    "dr",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
