/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "8 samples, 5 brands",
  "id": "cofid-current-12-904",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yogurt, low fat, hazelnut",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 16.0,
    "energy_kcal": 91.0,
    "fat_g": 1.5,
    "fibre_g": 0.9,
    "folate_ug": 18.0,
    "iron_mg": 0.17,
    "magnesium_mg": 18.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 141.0,
    "potassium_mg": 215.0,
    "protein_g": 4.4,
    "salt_g": 0.145,
    "sat_fat_g": 0.58,
    "sodium_mg": 58.0,
    "sugar_g": 14.9,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-904",
  "state": "Unspecified",
  "subcategory": "BNH",
  "tags": [
    "bnh",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
