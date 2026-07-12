/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Recipe from a personal collection",
  "id": "cofid-current-11-968",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice, pilau, plain, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 24.3,
    "energy_kcal": 134.0,
    "fat_g": 3.7,
    "fibre_g": 0.6,
    "folate_ug": 2.0,
    "iron_mg": 0.89,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 51.0,
    "protein_g": 2.5,
    "salt_g": 0.0025,
    "sat_fat_g": 0.47,
    "sodium_mg": 1.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.83,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-968",
  "state": "Unspecified",
  "subcategory": "AC",
  "tags": [
    "ac",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
