/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe. West Indian dish. Sweetcorn-based.",
  "id": "cofid-current-15-724",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Corn fritters, fried in rapeseed oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 32.9,
    "energy_kcal": 287.0,
    "fat_g": 15.2,
    "fibre_g": 2.5,
    "folate_ug": 25.0,
    "iron_mg": 0.91,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 165.0,
    "potassium_mg": 158.0,
    "protein_g": 5.8,
    "salt_g": 0.36,
    "sat_fat_g": 2.65,
    "sodium_mg": 144.0,
    "sugar_g": 4.9,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 3.49,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-724",
  "state": "Fried",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fried",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
