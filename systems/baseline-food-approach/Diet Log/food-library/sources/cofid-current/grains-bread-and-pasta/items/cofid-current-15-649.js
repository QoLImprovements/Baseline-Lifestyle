/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Rice, vegetables, nut and raisin. Recipe from dietary survey records",
  "id": "cofid-current-15-649",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salad, rice, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 24.5,
    "energy_kcal": 168.0,
    "fat_g": 7.0,
    "fibre_g": 0.0,
    "folate_ug": 22.0,
    "iron_mg": 0.94,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 156.0,
    "protein_g": 3.1,
    "salt_g": 0.4275,
    "sat_fat_g": 1.04,
    "sodium_mg": 171.0,
    "sugar_g": 4.9,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 2.32,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-649",
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
