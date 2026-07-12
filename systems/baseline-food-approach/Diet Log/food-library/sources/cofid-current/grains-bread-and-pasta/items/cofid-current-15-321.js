/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Greek dish. Recipe from a personal collection",
  "id": "cofid-current-15-321",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tomatoes, stuffed with rice",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 22.2,
    "energy_kcal": 212.0,
    "fat_g": 13.4,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.7,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 280.0,
    "protein_g": 2.1,
    "salt_g": 0.2225,
    "sat_fat_g": 2.0,
    "sodium_mg": 89.0,
    "sugar_g": 7.7,
    "vitamin_a_ug": 91.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 1.66,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-321",
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
