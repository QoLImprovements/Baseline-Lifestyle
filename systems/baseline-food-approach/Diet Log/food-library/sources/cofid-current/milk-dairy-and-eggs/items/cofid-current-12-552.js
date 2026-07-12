/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "12 samples, 7 brands, including raspberry, strawberry and tropical fruits, frozen",
  "id": "cofid-current-12-552",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pavlova, with fruit and cream",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 42.2,
    "energy_kcal": 244.0,
    "fat_g": 8.3,
    "fibre_g": 1.9,
    "folate_ug": 10.0,
    "iron_mg": 0.25,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 80.0,
    "protein_g": 2.7,
    "salt_g": 0.1025,
    "sat_fat_g": 4.56,
    "sodium_mg": 41.0,
    "sugar_g": 41.0,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-552",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
