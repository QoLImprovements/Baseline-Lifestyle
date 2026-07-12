/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe from review of recipe collection",
  "id": "cofid-current-15-220",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Nut and vegetable roast, mixed nuts with egg, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 18.3,
    "energy_kcal": 304.0,
    "fat_g": 21.2,
    "fibre_g": 0.0,
    "folate_ug": 24.0,
    "iron_mg": 1.8,
    "magnesium_mg": 84.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 430.0,
    "protein_g": 11.3,
    "salt_g": 0.725,
    "sat_fat_g": 3.3,
    "sodium_mg": 290.0,
    "sugar_g": 3.6,
    "vitamin_a_ug": 146.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 3.16,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-220",
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
