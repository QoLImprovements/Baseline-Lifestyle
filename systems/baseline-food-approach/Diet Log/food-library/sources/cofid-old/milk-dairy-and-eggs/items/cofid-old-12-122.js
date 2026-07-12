/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "8 samples, 4 brands",
  "id": "cofid-old-12-122",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cream, single, UHT",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 4.0,
    "energy_kcal": 196.0,
    "fat_g": 19.0,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.1,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 77.0,
    "potassium_mg": 150.0,
    "protein_g": 2.6,
    "salt_g": 0.1125,
    "sat_fat_g": 11.9,
    "sodium_mg": 45.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 285.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-122",
  "state": "Unspecified",
  "subcategory": "BJP",
  "tags": [
    "bjp",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
