/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "10 samples, 9 brands",
  "id": "cofid-old-19-152",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Stewed steak with gravy, canned",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.6,
    "energy_kcal": 158.0,
    "fat_g": 10.1,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 2.1,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 200.0,
    "protein_g": 16.2,
    "salt_g": 0.85,
    "sat_fat_g": 4.7,
    "sodium_mg": 340.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-152",
  "state": "Canned",
  "subcategory": "MI",
  "tags": [
    "canned",
    "condiments-and-sauces",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
