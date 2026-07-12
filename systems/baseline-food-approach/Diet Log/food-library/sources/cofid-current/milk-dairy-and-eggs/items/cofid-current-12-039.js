/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Mixed sample, 15 mothers at 10th day post partum and literature sources",
  "id": "cofid-current-12-039",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, human, transitional",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 6.9,
    "energy_kcal": 67.0,
    "fat_g": 3.7,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.07,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 57.0,
    "protein_g": 1.5,
    "salt_g": 0.075,
    "sat_fat_g": 1.5,
    "sodium_mg": 30.0,
    "sugar_g": 6.9,
    "vitamin_a_ug": 91.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-039",
  "state": "Unspecified",
  "subcategory": "BC",
  "tags": [
    "bc",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
