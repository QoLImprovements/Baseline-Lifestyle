/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Recipe from dietary survey records",
  "id": "cofid-current-15-872",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salad, pasta, vegetables and mayonnaise",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 17.5,
    "energy_kcal": 150.0,
    "fat_g": 7.9,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 0.65,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 53.0,
    "potassium_mg": 98.0,
    "protein_g": 3.7,
    "salt_g": 0.055,
    "sat_fat_g": 0.76,
    "sodium_mg": 22.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 328.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 2.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-872",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "condiments-and-sauces",
    "dr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
