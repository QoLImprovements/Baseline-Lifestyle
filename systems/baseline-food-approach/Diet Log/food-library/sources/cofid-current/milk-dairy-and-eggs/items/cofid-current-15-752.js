/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe. Eggs in basic UK-type curry sauce. Recipe from review of recipe collection",
  "id": "cofid-current-15-752",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, egg, in sweet sauce, UK type, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 5.9,
    "energy_kcal": 112.0,
    "fat_g": 7.3,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 1.7,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 96.0,
    "potassium_mg": 155.0,
    "protein_g": 6.3,
    "salt_g": 0.1675,
    "sat_fat_g": 1.9,
    "sodium_mg": 67.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.34,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-752",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
