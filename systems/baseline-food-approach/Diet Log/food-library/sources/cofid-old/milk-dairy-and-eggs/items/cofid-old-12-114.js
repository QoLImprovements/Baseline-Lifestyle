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
  "id": "cofid-old-12-114",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cream, soured, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 3.8,
    "energy_kcal": 205.0,
    "fat_g": 19.9,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.4,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 81.0,
    "potassium_mg": 110.0,
    "protein_g": 2.9,
    "salt_g": 0.1025,
    "sat_fat_g": 12.5,
    "sodium_mg": 41.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 348.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-114",
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
