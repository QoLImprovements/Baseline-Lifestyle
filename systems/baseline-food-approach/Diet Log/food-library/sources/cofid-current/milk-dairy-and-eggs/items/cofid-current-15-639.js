/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-15-639",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cauliflower cheese, made with semi-skimmed milk, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 116.0,
    "carbs_g": 6.2,
    "energy_kcal": 97.0,
    "fat_g": 5.9,
    "fibre_g": 1.3,
    "folate_ug": 22.0,
    "iron_mg": 0.37,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 223.0,
    "protein_g": 5.3,
    "salt_g": 0.26,
    "sat_fat_g": 3.05,
    "sodium_mg": 104.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 20.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-639",
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
