/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples of the same brand (Heinz)",
  "id": "cofid-old-12-276",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Macaroni cheese, canned",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 16.4,
    "energy_kcal": 138.0,
    "fat_g": 6.5,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.3,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 66.0,
    "protein_g": 4.5,
    "salt_g": 1.4,
    "sat_fat_g": 2.3,
    "sodium_mg": 560.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-276",
  "state": "Canned",
  "subcategory": "BV",
  "tags": [
    "bv",
    "canned",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
