/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Average of 22 samples of summer and winter cream",
  "id": "cofid-current-12-332",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cream, fresh, single",
  "nutritionPerBasis": {
    "calcium_mg": 89.0,
    "carbs_g": 2.2,
    "energy_kcal": 193.0,
    "fat_g": 19.1,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.0,
    "magnesium_mg": 8.0,
    "omega3_g": 0.11,
    "phosphorus_mg": 79.0,
    "potassium_mg": 104.0,
    "protein_g": 3.3,
    "salt_g": 0.0725,
    "sat_fat_g": 12.15,
    "sodium_mg": 29.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 319.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-332",
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
