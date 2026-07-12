/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "3 samples, different brands",
  "id": "cofid-current-17-703",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salad cream",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 21.2,
    "energy_kcal": 326.0,
    "fat_g": 26.7,
    "fibre_g": 0.5,
    "folate_ug": 3.0,
    "iron_mg": 0.5,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 40.0,
    "protein_g": 1.5,
    "salt_g": 1.75,
    "sat_fat_g": 0.0,
    "sodium_mg": 700.0,
    "sugar_g": 16.7,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 13.58,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-703",
  "state": "Unspecified",
  "subcategory": "WCG",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "wcg"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
