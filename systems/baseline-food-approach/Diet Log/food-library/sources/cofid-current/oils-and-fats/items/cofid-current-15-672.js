/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Bangladeshi dish. Recipe adapted from literature sources",
  "id": "cofid-current-15-672",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, cabbage and pea, with butter ghee, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 9.7,
    "energy_kcal": 177.0,
    "fat_g": 14.2,
    "fibre_g": 4.8,
    "folate_ug": 22.0,
    "iron_mg": 1.16,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 312.0,
    "protein_g": 3.4,
    "salt_g": 0.6275,
    "sat_fat_g": 8.31,
    "sodium_mg": 251.0,
    "sugar_g": 7.1,
    "vitamin_a_ug": 240.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 1.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-672",
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
