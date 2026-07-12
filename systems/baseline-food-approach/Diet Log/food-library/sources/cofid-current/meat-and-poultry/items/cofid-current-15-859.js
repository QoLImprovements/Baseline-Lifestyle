/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe. West Indian dish. Recipe from review of recipe collection",
  "id": "cofid-current-15-859",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice and red kidney beans",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 31.5,
    "energy_kcal": 158.0,
    "fat_g": 2.1,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 1.08,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 96.0,
    "potassium_mg": 229.0,
    "protein_g": 5.2,
    "salt_g": 0.0375,
    "sat_fat_g": 0.88,
    "sodium_mg": 15.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-859",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
