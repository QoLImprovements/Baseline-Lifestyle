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
  "id": "cofid-current-15-201",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lentil and nut roast, with egg, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 17.6,
    "energy_kcal": 218.0,
    "fat_g": 12.1,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 2.6,
    "magnesium_mg": 62.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 360.0,
    "protein_g": 10.8,
    "salt_g": 0.625,
    "sat_fat_g": 1.9,
    "sodium_mg": 250.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 97.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.63,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-201",
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
