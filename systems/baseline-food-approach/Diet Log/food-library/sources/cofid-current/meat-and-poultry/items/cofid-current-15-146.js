/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe from dietary survey records. Medium consistency",
  "id": "cofid-current-15-146",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, red kidney bean, Punjabi, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 10.1,
    "energy_kcal": 106.0,
    "fat_g": 5.6,
    "fibre_g": 0.0,
    "folate_ug": 23.0,
    "iron_mg": 1.4,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 270.0,
    "protein_g": 4.7,
    "salt_g": 0.0,
    "sat_fat_g": 0.6,
    "sodium_mg": 0.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.54,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-146",
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
