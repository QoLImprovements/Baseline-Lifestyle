/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "7 samples, 2 brands",
  "id": "cofid-current-17-715",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Dressing, blue cheese",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 9.8,
    "energy_kcal": 368.0,
    "fat_g": 35.9,
    "fibre_g": 1.3,
    "folate_ug": 5.0,
    "iron_mg": 0.6,
    "magnesium_mg": 7.0,
    "omega3_g": 3.4,
    "phosphorus_mg": 61.0,
    "potassium_mg": 52.0,
    "protein_g": 2.0,
    "salt_g": 2.1,
    "sat_fat_g": 6.59,
    "sodium_mg": 840.0,
    "sugar_g": 7.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.58,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-715",
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
