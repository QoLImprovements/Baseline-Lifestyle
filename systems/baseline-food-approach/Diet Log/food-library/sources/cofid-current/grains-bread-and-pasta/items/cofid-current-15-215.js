/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Recipe from review of recipe collection. Mixed nuts",
  "id": "cofid-current-15-215",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Nut and rice roast, mixed nuts, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 25.2,
    "energy_kcal": 346.0,
    "fat_g": 22.6,
    "fibre_g": 0.0,
    "folate_ug": 24.0,
    "iron_mg": 1.7,
    "magnesium_mg": 110.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 280.0,
    "potassium_mg": 440.0,
    "protein_g": 12.0,
    "salt_g": 1.1,
    "sat_fat_g": 3.5,
    "sodium_mg": 440.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-215",
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
