/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from review of recipe collection",
  "id": "cofid-current-15-874",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salad, potato, with mayonnaise",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 12.7,
    "energy_kcal": 239.0,
    "fat_g": 20.6,
    "fibre_g": 1.2,
    "folate_ug": 17.0,
    "iron_mg": 0.37,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 258.0,
    "protein_g": 1.6,
    "salt_g": 0.0925,
    "sat_fat_g": 1.57,
    "sodium_mg": 37.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 6.09,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-874",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
