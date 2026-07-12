/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from literature sources. Mixed vegetables",
  "id": "cofid-current-15-698",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, vegetable, with butter, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 10.3,
    "energy_kcal": 185.0,
    "fat_g": 15.3,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 0.77,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 346.0,
    "protein_g": 1.9,
    "salt_g": 0.3625,
    "sat_fat_g": 9.49,
    "sodium_mg": 145.0,
    "sugar_g": 4.7,
    "vitamin_a_ug": 740.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 11.33
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-698",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
