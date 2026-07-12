/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products",
  "id": "cofid-current-16-361",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sushi, salmon nigiri",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 25.2,
    "energy_kcal": 152.0,
    "fat_g": 2.5,
    "fibre_g": 1.2,
    "folate_ug": 6.0,
    "iron_mg": 0.2,
    "magnesium_mg": 13.0,
    "omega3_g": 0.52,
    "phosphorus_mg": 90.0,
    "potassium_mg": 132.0,
    "protein_g": 8.7,
    "salt_g": 0.9,
    "sat_fat_g": 0.48,
    "sodium_mg": 360.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-361",
  "state": "Unspecified",
  "subcategory": "JR",
  "tags": [
    "fish-and-seafood",
    "jr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
