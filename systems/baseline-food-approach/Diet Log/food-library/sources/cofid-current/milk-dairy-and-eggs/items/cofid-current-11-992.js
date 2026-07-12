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
  "id": "cofid-current-11-992",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastry, cheese, shortcrust, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 303.0,
    "carbs_g": 39.2,
    "energy_kcal": 491.0,
    "fat_g": 32.4,
    "fibre_g": 1.9,
    "folate_ug": 13.0,
    "iron_mg": 1.04,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 233.0,
    "potassium_mg": 117.0,
    "protein_g": 13.2,
    "salt_g": 0.985,
    "sat_fat_g": 20.16,
    "sodium_mg": 394.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 385.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-992",
  "state": "Unspecified",
  "subcategory": "AO",
  "tags": [
    "ao",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
