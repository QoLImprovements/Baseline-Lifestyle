/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from fried in blended oil 16-134",
  "id": "cofid-current-16-135",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rock Salmon/Dogfish, in batter, fried in blended oil, weighed with bones",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 9.6,
    "energy_kcal": 274.0,
    "fat_g": 20.4,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.5,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 210.0,
    "protein_g": 13.7,
    "salt_g": 0.375,
    "sat_fat_g": 2.7,
    "sodium_mg": 150.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 87.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-135",
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
