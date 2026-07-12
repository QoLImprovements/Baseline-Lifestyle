/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-15-735",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, black gram, whole and red kidney bean, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 8.4,
    "energy_kcal": 94.0,
    "fat_g": 5.0,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 1.61,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 215.0,
    "protein_g": 4.5,
    "salt_g": 0.065,
    "sat_fat_g": 0.36,
    "sodium_mg": 26.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-735",
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
