/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Recipe. West Indian dish. Recipe from review of recipe collection",
  "id": "cofid-current-15-858",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice and pigeon peas, brown rice",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 30.8,
    "energy_kcal": 157.0,
    "fat_g": 2.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.87,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 137.0,
    "potassium_mg": 279.0,
    "protein_g": 5.2,
    "salt_g": 0.0425,
    "sat_fat_g": 0.9,
    "sodium_mg": 17.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-858",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
