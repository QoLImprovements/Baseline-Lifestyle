/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Punjabi dish. Recipe from manufacturer",
  "id": "cofid-current-15-022",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, cauliflower, potato and pea, with vegetable oil",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 8.2,
    "energy_kcal": 166.0,
    "fat_g": 13.7,
    "fibre_g": 0.0,
    "folate_ug": 29.0,
    "iron_mg": 1.0,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 390.0,
    "protein_g": 3.4,
    "salt_g": 0.75,
    "sat_fat_g": 1.5,
    "sodium_mg": 300.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 3.34,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-022",
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
