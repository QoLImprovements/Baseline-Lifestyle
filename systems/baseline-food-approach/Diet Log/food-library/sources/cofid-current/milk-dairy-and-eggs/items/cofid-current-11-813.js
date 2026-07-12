/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "12 samples, 12 products, including Custard Creams and Bourbons",
  "id": "cofid-current-11-813",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, sandwich, cream",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 65.8,
    "energy_kcal": 477.0,
    "fat_g": 23.3,
    "fibre_g": 3.1,
    "folate_ug": 11.0,
    "iron_mg": 2.19,
    "magnesium_mg": 29.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 102.0,
    "potassium_mg": 253.0,
    "protein_g": 5.0,
    "salt_g": 0.47,
    "sat_fat_g": 13.31,
    "sodium_mg": 188.0,
    "sugar_g": 29.9,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.25,
    "vitamin_k_ug": 3.8
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-813",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
