/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products",
  "id": "cofid-current-12-461",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tarts, custard, individual",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 28.7,
    "energy_kcal": 263.0,
    "fat_g": 14.3,
    "fibre_g": 1.1,
    "folate_ug": 13.0,
    "iron_mg": 0.73,
    "magnesium_mg": 14.0,
    "omega3_g": 0.35,
    "phosphorus_mg": 101.0,
    "potassium_mg": 138.0,
    "protein_g": 6.7,
    "salt_g": 0.285,
    "sat_fat_g": 5.87,
    "sodium_mg": 114.0,
    "sugar_g": 14.2,
    "vitamin_a_ug": 72.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.27,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-461",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
