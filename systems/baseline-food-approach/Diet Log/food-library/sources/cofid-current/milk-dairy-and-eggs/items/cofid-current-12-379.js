/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "8 samples, 5 brands",
  "id": "cofid-current-12-379",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yogurt, low fat, plain",
  "nutritionPerBasis": {
    "calcium_mg": 162.0,
    "carbs_g": 7.8,
    "energy_kcal": 57.0,
    "fat_g": 1.0,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.08,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 143.0,
    "potassium_mg": 228.0,
    "protein_g": 4.8,
    "salt_g": 0.1575,
    "sat_fat_g": 0.66,
    "sodium_mg": 63.0,
    "sugar_g": 7.5,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.03
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-379",
  "state": "Unspecified",
  "subcategory": "BN",
  "tags": [
    "bn",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
