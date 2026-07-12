/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Onion base for curry. Recipe from review of recipe collection",
  "id": "cofid-current-15-880",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, curry, onion, with vegetable oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 6.5,
    "energy_kcal": 298.0,
    "fat_g": 30.0,
    "fibre_g": 1.6,
    "folate_ug": 6.0,
    "iron_mg": 1.44,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 144.0,
    "protein_g": 1.0,
    "salt_g": 0.0275,
    "sat_fat_g": 1.96,
    "sodium_mg": 11.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 6.82,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-880",
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
