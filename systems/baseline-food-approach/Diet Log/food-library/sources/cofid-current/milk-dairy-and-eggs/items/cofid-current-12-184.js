/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "22 samples, 2 brands",
  "id": "cofid-current-12-184",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yogurt, whole milk, plain",
  "nutritionPerBasis": {
    "calcium_mg": 200.0,
    "carbs_g": 7.8,
    "energy_kcal": 79.0,
    "fat_g": 3.0,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.1,
    "magnesium_mg": 19.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 170.0,
    "potassium_mg": 280.0,
    "protein_g": 5.7,
    "salt_g": 0.2,
    "sat_fat_g": 1.91,
    "sodium_mg": 80.0,
    "sugar_g": 7.8,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-184",
  "state": "Unspecified",
  "subcategory": "BNE",
  "tags": [
    "bne",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
