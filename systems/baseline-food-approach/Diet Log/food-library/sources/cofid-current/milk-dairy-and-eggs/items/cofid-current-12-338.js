/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 6 brands",
  "id": "cofid-current-12-338",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cream, dairy, UHT, canned spray, 85% cream",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 7.2,
    "energy_kcal": 252.0,
    "fat_g": 24.2,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.0,
    "magnesium_mg": 7.0,
    "omega3_g": 0.15,
    "phosphorus_mg": 57.0,
    "potassium_mg": 107.0,
    "protein_g": 1.9,
    "salt_g": 0.0775,
    "sat_fat_g": 15.2,
    "sodium_mg": 31.0,
    "sugar_g": 7.2,
    "vitamin_a_ug": 298.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-338",
  "state": "Canned",
  "subcategory": "BJP",
  "tags": [
    "bjp",
    "canned",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
