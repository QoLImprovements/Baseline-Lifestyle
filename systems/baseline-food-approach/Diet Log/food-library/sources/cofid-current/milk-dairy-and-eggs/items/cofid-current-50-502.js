/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "18 samples; lime treated before purchase",
  "id": "cofid-current-50-502",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tripe, dressed, stewed in milk",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 0.0,
    "energy_kcal": 100.0,
    "fat_g": 4.5,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.7,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 100.0,
    "protein_g": 14.8,
    "salt_g": 0.1825,
    "sat_fat_g": 2.4,
    "sodium_mg": 73.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "50-502",
  "state": "Unspecified",
  "subcategory": "MG",
  "tags": [
    "mg",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
