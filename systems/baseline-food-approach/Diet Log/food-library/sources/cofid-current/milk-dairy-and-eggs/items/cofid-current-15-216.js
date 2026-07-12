/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe from review of recipe collection. Mixed nuts",
  "id": "cofid-current-15-216",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Nut and rice roast, mixed nuts with egg, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 23.5,
    "energy_kcal": 333.0,
    "fat_g": 21.9,
    "fibre_g": 0.0,
    "folate_ug": 24.0,
    "iron_mg": 1.7,
    "magnesium_mg": 100.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 270.0,
    "potassium_mg": 420.0,
    "protein_g": 12.1,
    "salt_g": 1.05,
    "sat_fat_g": 3.5,
    "sodium_mg": 420.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.88,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-216",
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
