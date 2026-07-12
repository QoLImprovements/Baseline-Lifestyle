/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "5 samples, 4 products",
  "id": "cofid-old-11-932",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, milk, white, sliced",
  "nutritionPerBasis": {
    "calcium_mg": 218.0,
    "carbs_g": 46.7,
    "energy_kcal": 241.0,
    "fat_g": 3.1,
    "fibre_g": 2.7,
    "folate_ug": 49.0,
    "iron_mg": 1.5,
    "magnesium_mg": 25.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 114.0,
    "potassium_mg": 161.0,
    "protein_g": 9.4,
    "salt_g": 1.285,
    "sat_fat_g": 1.09,
    "sodium_mg": 514.0,
    "sugar_g": 4.5,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-932",
  "state": "Unspecified",
  "subcategory": "AF",
  "tags": [
    "af",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
