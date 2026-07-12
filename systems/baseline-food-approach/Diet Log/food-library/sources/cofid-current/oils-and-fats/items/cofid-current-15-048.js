/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe from manufacturer. Mixed vegetables",
  "id": "cofid-current-15-048",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, vegetable, Punjabi, with vegetable oil",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 8.2,
    "energy_kcal": 120.0,
    "fat_g": 8.6,
    "fibre_g": 0.0,
    "folate_ug": 31.0,
    "iron_mg": 1.5,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 340.0,
    "protein_g": 3.5,
    "salt_g": 0.975,
    "sat_fat_g": 1.0,
    "sodium_mg": 390.0,
    "sugar_g": 5.5,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 2.44,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-048",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
