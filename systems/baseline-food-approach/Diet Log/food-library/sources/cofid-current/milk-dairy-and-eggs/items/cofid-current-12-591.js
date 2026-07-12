/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe. Calculated from 15g powder to 200ml milk",
  "id": "cofid-current-12-591",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk shake, powder, made up with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 112.0,
    "carbs_g": 11.1,
    "energy_kcal": 86.0,
    "fat_g": 3.5,
    "fibre_g": 0.0,
    "folate_ug": 21.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 157.0,
    "protein_g": 3.3,
    "salt_g": 0.1,
    "sat_fat_g": 0.0,
    "sodium_mg": 40.0,
    "sugar_g": 11.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.56
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-591",
  "state": "Unspecified",
  "subcategory": "BH",
  "tags": [
    "bh",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
