/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-15-734",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Moussaka, vegetable, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 8.7,
    "energy_kcal": 133.0,
    "fat_g": 8.6,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 0.62,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 260.0,
    "protein_g": 4.4,
    "salt_g": 0.17,
    "sat_fat_g": 2.4,
    "sodium_mg": 68.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-734",
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
