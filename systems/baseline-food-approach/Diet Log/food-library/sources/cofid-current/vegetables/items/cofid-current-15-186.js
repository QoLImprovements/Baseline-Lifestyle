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
  "id": "cofid-current-15-186",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lasagne, spinach, wholemeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 13.0,
    "energy_kcal": 93.0,
    "fat_g": 3.1,
    "fibre_g": 0.0,
    "folate_ug": 27.0,
    "iron_mg": 1.1,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 200.0,
    "protein_g": 4.2,
    "salt_g": 0.325,
    "sat_fat_g": 1.3,
    "sodium_mg": 130.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 183.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-186",
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
