/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 5 brands",
  "id": "cofid-current-12-112",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cream, half, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 4.3,
    "energy_kcal": 148.0,
    "fat_g": 13.3,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.1,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 120.0,
    "protein_g": 3.0,
    "salt_g": 0.1225,
    "sat_fat_g": 8.3,
    "sodium_mg": 49.0,
    "sugar_g": 4.3,
    "vitamin_a_ug": 199.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-112",
  "state": "Unspecified",
  "subcategory": "BJC",
  "tags": [
    "bjc",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
