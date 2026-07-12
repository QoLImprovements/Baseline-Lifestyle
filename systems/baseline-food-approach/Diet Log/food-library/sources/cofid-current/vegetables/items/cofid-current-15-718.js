/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe, Bangladeshi dish",
  "id": "cofid-current-15-718",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cauliflower with onions and chilli pepper, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 4.6,
    "energy_kcal": 55.0,
    "fat_g": 3.4,
    "fibre_g": 2.0,
    "folate_ug": 42.0,
    "iron_mg": 0.46,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 212.0,
    "protein_g": 1.8,
    "salt_g": 0.0175,
    "sat_fat_g": 0.34,
    "sodium_mg": 7.0,
    "sugar_g": 3.3,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 27.0,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 26.58
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-718",
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
