/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Samples as fried in retail blend oil, fatty acids calculated",
  "id": "cofid-current-16-140",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rock Salmon/Dogfish, in batter, fried in sunflower oil",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 10.3,
    "energy_kcal": 295.0,
    "fat_g": 21.9,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.5,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 230.0,
    "protein_g": 14.7,
    "salt_g": 0.4,
    "sat_fat_g": 3.1,
    "sodium_mg": 160.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 94.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-140",
  "state": "Fried",
  "subcategory": "JA",
  "tags": [
    "fish-and-seafood",
    "fried",
    "ja"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
