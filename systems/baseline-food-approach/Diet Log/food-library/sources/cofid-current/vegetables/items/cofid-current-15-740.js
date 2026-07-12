/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe. White cabbage in masala sauce",
  "id": "cofid-current-15-740",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, cabbage, masala, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 8.1,
    "energy_kcal": 83.0,
    "fat_g": 4.9,
    "fibre_g": 3.2,
    "folate_ug": 32.0,
    "iron_mg": 0.66,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.0,
    "potassium_mg": 312.0,
    "protein_g": 1.7,
    "salt_g": 0.0625,
    "sat_fat_g": 0.33,
    "sodium_mg": 25.0,
    "sugar_g": 6.4,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 19.0,
    "vitamin_e_mg": 1.61,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-740",
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
