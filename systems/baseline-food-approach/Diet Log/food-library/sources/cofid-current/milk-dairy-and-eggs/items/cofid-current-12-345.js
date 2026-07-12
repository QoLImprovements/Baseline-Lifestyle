/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "18 samples",
  "id": "cofid-current-12-345",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Camembert",
  "nutritionPerBasis": {
    "calcium_mg": 235.0,
    "carbs_g": 0.0,
    "energy_kcal": 290.0,
    "fat_g": 22.7,
    "fibre_g": 0.0,
    "folate_ug": 83.0,
    "iron_mg": 0.0,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 241.0,
    "potassium_mg": 104.0,
    "protein_g": 21.5,
    "salt_g": 1.5125,
    "sat_fat_g": 14.2,
    "sodium_mg": 605.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 283.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.65,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-345",
  "state": "Unspecified",
  "subcategory": "BL",
  "tags": [
    "bl",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
