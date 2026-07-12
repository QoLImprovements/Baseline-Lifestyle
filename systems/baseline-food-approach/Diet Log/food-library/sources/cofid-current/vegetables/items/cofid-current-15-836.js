/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from dietary survey records",
  "id": "cofid-current-15-836",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasty, vegetable, wholemeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 30.7,
    "energy_kcal": 272.0,
    "fat_g": 15.2,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 1.07,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 119.0,
    "potassium_mg": 240.0,
    "protein_g": 4.9,
    "salt_g": 0.3275,
    "sat_fat_g": 9.2,
    "sodium_mg": 131.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 305.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-836",
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
