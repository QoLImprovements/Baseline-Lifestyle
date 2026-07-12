/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from review of recipe collection",
  "id": "cofid-current-15-219",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Nut and vegetable roast, mixed nuts, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 19.6,
    "energy_kcal": 314.0,
    "fat_g": 21.9,
    "fibre_g": 0.0,
    "folate_ug": 24.0,
    "iron_mg": 1.7,
    "magnesium_mg": 89.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 450.0,
    "protein_g": 11.1,
    "salt_g": 0.75,
    "sat_fat_g": 3.2,
    "sodium_mg": 300.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 142.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 3.29,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-219",
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
