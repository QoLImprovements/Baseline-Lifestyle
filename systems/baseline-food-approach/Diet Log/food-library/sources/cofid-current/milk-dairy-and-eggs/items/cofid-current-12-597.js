/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Standardised milk. Samples taken in January and March",
  "id": "cofid-current-12-597",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, whole, pasteurised, winter and spring",
  "nutritionPerBasis": {
    "calcium_mg": 116.0,
    "carbs_g": 5.0,
    "energy_kcal": 64.0,
    "fat_g": 3.6,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.02,
    "magnesium_mg": 11.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 98.0,
    "potassium_mg": 154.0,
    "protein_g": 3.3,
    "salt_g": 0.1,
    "sat_fat_g": 2.29,
    "sodium_mg": 40.0,
    "sugar_g": 5.0,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-597",
  "state": "Unspecified",
  "subcategory": "BAK",
  "tags": [
    "bak",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
