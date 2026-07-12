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
  "id": "cofid-current-15-857",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice and pigeon peas",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 33.1,
    "energy_kcal": 163.0,
    "fat_g": 2.2,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.64,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 234.0,
    "protein_g": 4.9,
    "salt_g": 0.045,
    "sat_fat_g": 0.89,
    "sodium_mg": 18.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-857",
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
