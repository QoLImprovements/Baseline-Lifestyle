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
  "id": "cofid-current-15-842",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pilaf, rice with spinach, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 132.0,
    "carbs_g": 17.8,
    "energy_kcal": 104.0,
    "fat_g": 1.9,
    "fibre_g": 0.0,
    "folate_ug": 44.0,
    "iron_mg": 1.93,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 400.0,
    "protein_g": 3.7,
    "salt_g": 0.2625,
    "sat_fat_g": 0.28,
    "sodium_mg": 105.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 440.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 1.52,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-842",
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
